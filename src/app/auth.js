
import prisma from "@/global/prisma";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  })],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email },
        });
        token.id = dbUser?.id;
        token.email = dbUser?.email;
        token.credits = dbUser?.credits
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.credits = token.credits
      return session;
    },
  },
  events: {
    async signIn({ user }) {
      try {
        const existingUser = await prisma.user.findUnique({ where: { email: user.email } });
        if (!existingUser) {
          await prisma.user.create({
            data: {
              name: user.name,
              email: user.email,
              image: user.image,
              credits: 5,
            },
          });
        }
      } catch (err) {
        console.error("Event signIn error:", err);
      }
    },
  },

  pages: {
    signIn: '/sign-in'
  },
},
)