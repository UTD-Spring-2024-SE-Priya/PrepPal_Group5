import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import FirsttimesigninEnterProfileInformation from "pages/FirsttimesigninEnterProfileInformation"; 
import WeeklyPlan from "pages/WeeklyPlan";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    { path: "/WeeklyPlan", element: <WeeklyPlan /> },
    { path: "/FirstTimesigninEnterProfileInformation", element: <FirstTimesigninEnterProfileInformation /> },
  ]);

  return element;
};

export default ProjectRoutes;
