import { useState } from "react";

const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return { isAuthenticated, setIsAuthenticated };
};

export default useAuthentication;
