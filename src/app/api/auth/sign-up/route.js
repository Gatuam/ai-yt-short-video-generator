import bcrypt from "bcrypt";
import prisma from "@/global/prisma";
import { sendVerificationEmail } from "@/mail/sendVerification";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    const userByUsername = await prisma.user.findFirst({ where: { username } });
    if (userByUsername) {
      return Response.json(
        { success: false, message: "Username already taken" },
        { status: 409 }
      );
    }

    const existingUser = await prisma.user.findFirst({ where: { email } });

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 12);

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
    } else if (existingUser && existingUser.isVerified) {
      return Response.json(
        { success: false, message: "Email already registered" },
        { status: 409 }
      );
    } else {
      await prisma.user.create({
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
    }

    const emailRes = await sendVerificationEmail(email, username, verifyCode);

    if (!emailRes.success) {
      return Response.json(
        { success: false, message: "Failed to send verification email" },
        { status: 500 }
      );
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
      { success: false, message: "Server error during registration" },
      { status: 500 }
    );
  }
}
