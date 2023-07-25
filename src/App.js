import logo from './logo.svg';
import './App.css';
import NavBar from 'components/NavBar';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import AnimatedRoutes from 'routes';
import SplashAnimation from 'components/SplashAnimation';

import Home from 'pages/Home';
import Projects from 'pages/Projects';

function App() {
  return (
    <HashRouter>
          {/* <Routes  key="asdf">
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<Navigate to="/" replace/>} />
          </Routes> */}
          <AnimatedRoutes />
          {/* <NavBar key="nav"/> */}
          {/* <SplashAnimation key="splashy"/> */}
    </HashRouter>
  );
}

export default App;
