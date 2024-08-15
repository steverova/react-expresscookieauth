import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true,
});

const createHttpResponse = (data, status, statusText) => {
  return { data, status, statusText };
};

axiosInstance.interceptors.response.use(
  (response) => {
    return createHttpResponse(
      response.data,
      response.status,
      response.statusText
    );
  },
  (error) => {
    if (error.response) {
      return createHttpResponse(
        error.response.data,
        error.response.status,
        error.response.statusText || ""
      );
    }

    if (error.request) {
      console.error("No se recibió respuesta:", error.request);
      return createHttpResponse(null, 0, "No response received");
    }

    console.error("Error al hacer la solicitud:", error.message);
    return createHttpResponse(null, 0, "Request configuration error");
  }
);

export default axiosInstance;
