import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export const useAuth = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  return { isAuthenticated, login, logout };
};
