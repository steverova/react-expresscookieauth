import { useNavigate } from "react-router-dom";
import axiosInstance from "../http/axiosInstance";
import { useLoginNotificationsStore } from "../store/useLoginNotificationsStore";
import { useUserStore } from "../store/useUserStore";

const useAuth = () => {
  const navigate = useNavigate();
  const { notify } = useLoginNotificationsStore();
  const { setUser } = useUserStore();

  const singUp = async ({ email, password }) => {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    console.log(response);

    if (response.status === 200) {
      setUser(response.data.content);
      navigate("/dashboard");
    }

    if (response.status === 404) {
      notify("Usuario no encontrado", true, 404);
    }
    return response;
  };

  const logOut = async () => {
    const response = await axiosInstance.post("/auth/logout");
    if (response.status === 200 && response.data.message === "LOGOUT_SUCCESS") {
      navigate("/");
    }
  };

  const isAuthenticated = async () => {
    const response = await axiosInstance.get("/auth/protected");
    console.log(response);
    return response.data.autorized;
  };

  const validateTurnsTileToken = async (turnstileToken) => {
    const response = await axiosInstance.post("/auth/verify-turnstile-token", {
      turnstileToken,
    });
    return response;
  };

  return { singUp, logOut, isAuthenticated, validateTurnsTileToken };
};

export default useAuth;
