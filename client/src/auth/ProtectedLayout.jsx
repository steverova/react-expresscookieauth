import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect, useState } from "react";

const ProtectedLayout = () => {
  const { protectedRoute } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const checkAuthentication = async () => {
      const result = await protectedRoute();
      setIsAuthenticated(result.data.autorized);
    };

    checkAuthentication();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/signup" />
  );
};

export default ProtectedLayout;
