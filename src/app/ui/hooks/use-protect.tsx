import { paths } from "@/lib";
import { useLocation } from "react-router-dom";

export const useProtect = () => {
  const { pathname } = useLocation();
  const isAuthenticated = true;
  const isLoading = false;
  const isTest = pathname === paths.test;
  const isRoot = pathname === paths.root;

  return {
    isLoading,
    isAuthenticated,
    isTest,
    isRoot,
  };
};
