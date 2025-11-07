// src/auth/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";
import { mockUsers } from "./constants";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("authUser");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        console.warn("Lỗi parse authUser từ localStorage");
      }
    }
  }, []);

  const login = (username, password) => {
    const foundUser = mockUsers[username];
    if (foundUser && foundUser.password === password) {
      const userWithoutPassword = {
        username: foundUser.username,
        role: foundUser.role,
      };
      localStorage.setItem("authUser", JSON.stringify(userWithoutPassword));
      setUser(userWithoutPassword);
      return { success: true };
    }
    return { success: false, error: "Tên đăng nhập hoặc mật khẩu sai!" };
  };

  const logout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
