import {
  createBrowserRouter,
 } from "react-router";
import App from "../App";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    Component:App,
    path: "/",
    children:[{
        path:"/about",
        Component:About
    }]
  },
]);