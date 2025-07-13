import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "@/global/prisma";

export const authOption = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });
          if (!user) {
            throw new Error("No user found");
          }
          if (!user.isVerified) {
            throw new Error(" Please your email before login");
          }
          if (user) {
            return {
              status: 200,
              user,
            };
          } else {
            return null;
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
};
