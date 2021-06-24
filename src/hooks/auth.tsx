import React, 
{ 
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface User {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

interface AuthContextData {
  user: User;
}

interface AuthProviderProps {
  children: ReactNode; 
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }:  AuthProviderProps) {
  const [ user, setUser ] = useState<User>({
    id: "1",
    username: "Matheus",
    firstName: "Matheus",
    avatar: "Matheus",
    email: "Matheus",
    token: "Matheus",
  } as User);

  return (
    <AuthContext.Provider value={{ 
      user 
    }}>
      { children }
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
}