import logo from './logo.svg';
import './App.css';
import NavBar from 'components/NavBar';
import { HashRouter } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Router from 'routes';
import SplashAnimation from 'components/SplashAnimation';

function App() {
  return (
    <AnimatePresence mode="wait">
      <HashRouter>
        <NavBar />
        <Router />
      </HashRouter>
    </AnimatePresence>
  );
}

export default App;
