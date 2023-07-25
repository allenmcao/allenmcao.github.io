import { useRoutes, useLocation, Routes, Route, Navigate } from "react-router-dom";

import Home from 'pages/Home';
import Projects from 'pages/Projects';
import { AnimatePresence } from "framer-motion";

// export default function Router() {
//     const location = useLocation();
//     let routes = useRoutes([
//       { path: "/home", element: <Home /> },
//       { path: "/projects", element: <Projects /> },
//     ], location);
  
//     return routes;
// }

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<Navigate to="/" replace/>} />
            </Routes>
        </AnimatePresence>
    )
}