import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "../pages/Profile";
import Project from "../pages/Project";
import Todopage from "../pages/Todopage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../auth-components/Dashboard";
import Account from "../auth-components/Account";
import Signin from "../auth-components/Signin";
import Signup from "../auth-components/Signup";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Profile />
        </>
      ),
    },
    {
      path: "/project",
      element: (
        <>
          <Project />
        </>
      ),
    },
    {
      path: "/todo",
      element: (
        <>
          <Todopage />
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <Register />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <>
          <Dashboard />
        </>
      ),
    },
    {
      path: "/account",
      element: (
        <>
          <Account />
        </>
      ),
    },
    {
      path: "/signin",
      element: (
        <>
          <Signin />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Signup />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}
