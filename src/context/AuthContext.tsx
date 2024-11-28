import { createContext, useContext } from "react";


interface User {
  authenticated: boolean;
}

export const UserContext = createContext<User | boolean>(false);

export function useUserContext() {
  const user = useContext(UserContext);

  if (user === undefined) {
    throw new Error("User context is undefined"); 
  }

  return user;
}
