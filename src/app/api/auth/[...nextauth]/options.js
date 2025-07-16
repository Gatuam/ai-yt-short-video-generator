import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
    // CredentialsProvider({
    //   name: "Email",
    //   credentials: {
    //     email: { label: "Email", type: "text", placeholder: "email" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     try {
    //       const user = await prisma.user.findUnique({
    //         where: { email: credentials.email },
    //       });

    //       if (!user) {
    //         throw new Error("No user found");
    //       }

    //       if (!user.isVerified) {
    //         throw new Error("Please verify your email before logging in");
    //       }

    //       const passwordCorrect = await bcrypt.compare(
    //         credentials.password,
    //         user.password
    //       );

    //       if (!passwordCorrect) {
    //         throw new Error("Password incorrect");
    //       }

    //       return {
    //         id: user.id,
    //         name: user.name,
    //         email: user.email,
    //       };
    //     } catch (err) {
    //       throw new Error(err.message || "Authorization failed");
    //     }
    //   },
    // }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    }



    // async jwt({ token, user }) {
    //   if (user) {
    //     token.id = user.id?.toString();
    //     token.isVerified = user?.isVerified;
    //     token.credits = user?.credits;
    //     token.username = user?.username
    //   }
    //   return token;
    // },
    // async session({ session, token }) {
    //   if (token) {
    //     session.user.id = token?.id;
    //     session.user.isVerified = token?.isVerified;
    //     session.user.credits = token?.credits;
    //     session.user.username = token?.username
    //   }
    //   return session;
    // },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
