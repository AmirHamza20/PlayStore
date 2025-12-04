import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
;


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <Error></Error>,
    children:[
      {
        index:true,
        path: "/",
        Component:Home
      },
      {
        path:"/Apps",
        Component: Apps
      },
      {
        path: "/Installation",
        Component: Installation
      }
    ]
  },
]);