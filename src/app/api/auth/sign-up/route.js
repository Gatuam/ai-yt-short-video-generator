import bcrypt from "bcrypt";
import prisma from "@/global/prisma";
import { sendMail } from "@/mail/sendVerification";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    // Check username availability
    const userByUsername = await prisma.user.findFirst({ where: { username } });
    if (userByUsername) {
      return Response.json(
        { success: false, message: "Username already taken" },
        { status: 409 }
      );
    }

    // Check email existence
    const existingUser = await prisma.user.findFirst({ where: { email } });

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 12); // 12 hours
    const hashedPassword = await bcrypt.hash(password, 10);

    if (existingUser && !existingUser.isVerified) {
      await prisma.user.update({
        where: { id: existingUser.id },
        data: {
          password: hashedPassword,
          verifyCode,
          verifyCodeExpiry: expiresAt,
        },
      });

      const emailSent = await sendMail(
        existingUser.email,
        "Verify your account",
        `<p>Hello ${existingUser.username}, your verification code is <strong>${verifyCode}</strong>.</p>`
      );

      if (!emailSent) {
        return Response.json(
          { success: false, message: "Failed to send verification email" },
          { status: 500 }
        );
      }
    } else if (existingUser && existingUser.isVerified) {
      return Response.json(
        { success: false, message: "Email already registered" },
        { status: 409 }
      );
    } else {
      // Create a new user
      const NewUser = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
          credits: 5,
          verifyCode,
          verifyCodeExpiry: expiresAt,
          isVerified: false,
        },
      });

      const emailSent = await sendMail(
        NewUser.email,
        "Verify your account",
        `<p>Hello ${NewUser.username}, your verification code is <strong>${verifyCode}</strong>.</p>`
      );

      if (!emailSent) {
        return Response.json(
          { success: false, message: "Failed to send verification email" },
          { status: 500 }
        );
      }
    }

    return Response.json(
      {
        success: true,
        message: "Registered successfully. Please verify your email.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return Response.json(
      {
        success: false,
        message: "Server error during registration",
        error: err,
      },
      { status: 500 }
    );
  }
}
