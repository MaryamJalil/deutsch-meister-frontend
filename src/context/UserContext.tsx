'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  currentLevel?: string;
} | null;

type UserContextType = {
  user: User;
  login: (userData: NonNullable<User>) => void; // ✅ added
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  // Load user from localStorage when the app starts
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // ✅ Add login() method
  const login = (userData: NonNullable<User>) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // ✅ Keep logout method
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
