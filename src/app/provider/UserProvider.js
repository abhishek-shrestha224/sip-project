"use client";

import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Context consumed outside Provider");
  }
  return context;
};

export { UserContext, UserContextProvider, useUserContext };
