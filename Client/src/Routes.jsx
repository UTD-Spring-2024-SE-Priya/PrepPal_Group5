import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";
import SignUp from "pages/SignUp";
import FirsttimesigninEnterProfileInformation from "pages/FirsttimesigninEnterProfileInformation";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "firsttimesigninenterprofileinformation",
      element: <FirsttimesigninEnterProfileInformation />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
