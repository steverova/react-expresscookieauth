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

  const isAuthenticated = async () => {
    const response = await axiosInstance.get("/auth/protected");
    console.log("que pasa ==>", response.data.autorized);
    return response.data.autorized;
  };

  const validateTurnsTileToken = async (turnstileToken) => {
    const response = await axiosInstance.post("/auth/verify-turnstile-token", {
      turnstileToken,
    });
    return response;
  }

  return { singUp, logOut, isAuthenticated, validateTurnsTileToken };
};

export default useAuth;
