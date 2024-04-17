import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import FirsttimesigninEnterProfileInformation from "pages/FirsttimesigninEnterProfileInformation";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "firsttimesigninenterprofileinformation",
      element: <FirsttimesigninEnterProfileInformation />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
