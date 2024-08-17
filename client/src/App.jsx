import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./app.css";

import Login from "./views/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedLayout from "./auth/ProtectedLayout";
import Unauthorized from "./views/Unauthorized";
import Dashboard from "./views/Dashboard";
import NotFound from "./views/NotFound";
import DataTable from "./views/DataTable";
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
      path: "/dashboard/",
      element: <ProtectedLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "table",
          element: <DataTable />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
