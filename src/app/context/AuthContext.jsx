"use client";
import { useSession } from "next-auth/react";
import { createContext, useState, useEffect } from "react";

// Define the shape of the context (optional but recommended with TypeScript)
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (status === "authenticated") {
      setAuthUser({
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
      });
    } else if (status === "unauthenticated") {
      setAuthUser(null);
    }
  }, [session, status]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
