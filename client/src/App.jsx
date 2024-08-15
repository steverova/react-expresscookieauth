import Login from "./views/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import ProtectedLayout from "./auth/ProtectedLayout";
import Unauthorized from "./views/Unauthorized";
import Dashboard from "./views/dashboard";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/unauthorized",
      element: <Unauthorized />,
    },
    {
      path: "/signup",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <ProtectedLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
