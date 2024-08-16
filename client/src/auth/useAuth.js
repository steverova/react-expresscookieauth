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
    console.log(response.data);
    if (response.status === 200 && response.data.message === "LOGOUT_SUCCESS") {
      console.log("redirect to login");
      navigate("/");
    }
  };

  const protectedRoute = async () => {
    console.log("Protected Route");
    const response = await axiosInstance.get("/auth/protected");
    if (response.status === 401) {
      navigate("/unauthorized");
    }
    return response;
  };

  const isAuthenticated = async () => {
    const response = await axiosInstance.get("/auth/protected");
    console.log("que pasa ==>", response.data.autorized)
    return response.data.autorized;
  };

  return { singUp, protectedRoute, logOut, isAuthenticated };
};

export default useAuth;
