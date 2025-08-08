import {
  createBrowserRouter,
 } from "react-router";
import App from "../App";
import About from "../pages/About";
import RegistrationForm from "../components/modules/authentacation/RegistrationForm";
import Login from "../components/modules/authentacation/Login";

export const router = createBrowserRouter([
  {
    Component:App,
    path: "/",
    children:[{
        path:"/about",
        Component:About
    }]
  },
  {
    path:"/register",
    Component:RegistrationForm
  },
  {
    path:"/login",
    Component:Login
  }
]);