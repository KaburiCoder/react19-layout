import { Outlet } from "react-router-dom";
import { useProtect } from "./hooks/use-protect";

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading, isTest } = useProtect();

  if (isTest) return <Outlet />;
  if (isLoading) return <div>Loading...</div>;

  if (isAuthenticated) {
    return <Outlet />;
  }
  // else {
  //   return <Navigate to={paths.signIn} />;
  // }
};
