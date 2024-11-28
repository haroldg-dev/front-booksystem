import { createContext } from "react";

interface User {
  authenticated: boolean;
  setAuthenticated: (isAuth: boolean) => void;
}

// Define the context with a default value for User type
export const AuthContext = createContext<User>({
  authenticated: false,
  setAuthenticated: (auth: boolean) => {},
});
