"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import feathersClient from "@/utils/api";

interface AuthContextProps {
  user: { id: string; email: string } | null;
  setUser: (user: { id: string; email: string } | null) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);

  useEffect(() => {
    const reAuthenticate = async () => {
      try {
        const response = await feathersClient.reAuthenticate();
        setUser(response.user);
      } catch {
        setUser(null);
      }
    };

    reAuthenticate();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
