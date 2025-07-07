export const doLogin = (data, next) => {
  sessionStorage.setItem("token", data.token);
  localStorage.setItem("role", data.role);
  localStorage.setItem("email", data.email);
  next();
};

export const isLoggedIn = () => {
  return sessionStorage.getItem("token") !== null;
};

export const getToken = () => {
  return sessionStorage.getItem("token");
};

export const logout = () => {
  sessionStorage.removeItem("token");
  localStorage.removeItem("email");
  localStorage.removeItem("role");
};

export const getCurrentUserEmail = () => {
  return localStorage.getItem("email");
};

export const getCurrentUserRole = () => {
  return localStorage.getItem("role");
};
export const isAdmin = () => {
  return localStorage.getItem("role") === "ADMIN";
};

// auth.js
export const doLogout = (next) => {
  sessionStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("email");

  // Optional: clear all localStorage if needed
  localStorage.clear();

  // Run any callback after logout
  if (typeof next === "function") {
    next();
  }
};

