"use client";

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};

export { AuthContext, AuthContextProvider, useAuthContext };
