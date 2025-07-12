"use client";
import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { auth } from "../config/firebaseConfig";
import { AuthContext } from "../context/AuthContext";

const AuthUserProvider = ({ children }) => {

  const {authUser, setAuthUser} = useContext(AuthContext);
  
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setAuthUser(user);
      console.log(user);
    });

    return () => unsub();
  }, []);

  return <div>{children}</div>;
};

export default AuthUserProvider;
