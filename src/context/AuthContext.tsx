import { createContext } from "react";

interface User {
  authenticated: boolean;
  setAuthenticated: (isAuth: boolean) => void;
  userId: string;
  setUserId: (user: string) => void;
}

// Define the context with a default value for User type
export const AuthContext = createContext<User>({
  authenticated: false,
  setAuthenticated: (auth: boolean) => {},
  userId: "",
  setUserId: (user: string) => {},
});
