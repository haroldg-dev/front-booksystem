import { createContext, useContext } from "react";
// import { User } from "./FBComponents";

interface User {
  authenticated: boolean;
}

export const UserContext = createContext<User | boolean>(false);
//Create a context
//Wrap the application in Context.Provider and assign a value to it.
//Consume the context in any component child

export function useUserContext() {
  const user = useContext(UserContext);

  if (user === undefined) {
    throw new Error("User context is undefined"); 
  }

  return user;
}
