import { createBrowserRouter } from "react-router-dom";
import About from "../Components/Pages/About/About";
import Appoinment from "../Components/Pages/Apooinment/Appoinment";
import Contact from "../Components/Pages/Contact/Contact";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Reviews from "../Components/Pages/Reviews/Reviews";
import Root from "../Layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:'/appointment',
        element:<Appoinment></Appoinment>
      }
    ],
  },
]);

export default router;
