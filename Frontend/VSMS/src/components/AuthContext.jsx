import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const login = (token, userRole) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", userRole);
    setIsLoggedIn(true);
    setRole(userRole);
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setRole(null);
  };

  useEffect(() => {
    setRole(localStorage.getItem("role"));
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;