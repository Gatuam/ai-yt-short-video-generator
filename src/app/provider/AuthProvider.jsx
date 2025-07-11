"use client";
import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../config/firebaseConfig";

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({});
 
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setAuthUser(user);
      console.log(user);
    });

    return () => unsub();
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ authUser }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

export default AuthProvider;
