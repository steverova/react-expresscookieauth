import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect, useState } from "react";

const ProtectedLayout = () => {
  const { isAuthenticated } = useAuth();
  const [isAuth, setIsAuth] = useState(null);

  const fetchAuth = async () => {
    const response = await isAuthenticated();
    setIsAuth(response);
  };

  useEffect(() => {
    fetchAuth();
  }, []);
  
  if (isAuth === null) {
    return <div>Loading...</div>;
  }

  return isAuth ? <Outlet /> : <Navigate to="/signup" />;
};

export default ProtectedLayout;
