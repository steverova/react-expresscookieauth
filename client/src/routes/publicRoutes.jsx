import NotFound from "@/pages/NotFound"
import SignIn from "@/pages/signin/SignIn"


const publicRoutes = [
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]

export default publicRoutes
