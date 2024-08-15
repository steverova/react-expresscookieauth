import { useNavigate } from "react-router-dom";
import axiosInstance from "../http/axiosInstance";

const useAuth = () => {
  const navigate = useNavigate();
  const singUp = async ({ email, password }) => {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    if (response.status === 200) {
      navigate("/dashboard");
    }
    return response;
  };

  const logOut = async () => {
    const response = await axiosInstance.post("/auth/logout");
    if (response.status === 200 && response.data.message === "LOGOUT")
      navigate("/");
  };

  const protectedRoute = async () => {
    const response = await axiosInstance.get("/auth/protected");
    if (response.status === 401) {
      navigate("/unauthorized");
    }
    return response;
  };

  return { singUp, protectedRoute, logOut };
};

export default useAuth;
