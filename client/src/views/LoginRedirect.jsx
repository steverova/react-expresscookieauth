import { useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const LoginRedirect = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const { isLogged } = useAuthStore();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  console.log("isLogged", isLogged);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const fetchAuth = async () => {
      if (isLogged)
        try {
          const response = await isAuthenticated();
          if (response) {
            navigate("/dashboard");
          } else {
            setIsLoading(false);
          }
        } catch (error) {
          console.error("Error fetching authentication status:", error);
          setIsLoading(false);
        }
    };

    fetchAuth();
  }, [isAuthenticated, navigate]);

  if (isLoading && isLogged) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default LoginRedirect;
