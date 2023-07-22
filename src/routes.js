import { useRoutes } from "react-router-dom";

import Home from 'pages/Home';
import Projects from 'pages/Projects';

export default function Router() {
    let routes = useRoutes([
      { path: "/home", element: <Home /> },
      { path: "/projects", element: <Projects /> },
    ]);
  
    return routes;
}