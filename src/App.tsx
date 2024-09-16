// src/App.tsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar';
import Footer from './Components/Fotter';
import PortfolioIntro from './Components/Hero';
import Experience from './Components/Exprince';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Blog from './Components/Blog';
import AboutMe from './Components/About';
import Contact from './Components/Contacat';
import Education from "./Components/Edudction"
const App: React.FC = () => {
  const location = useLocation();

  // Determine the type of transition based on the current route
  const getTransitionEffect = (path: string) => {
    if (path === '/project' || path === '/blog' || path === '/contact') {
      return {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
      };
    }
    return {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 100 },
    };
  };

  const transitionEffect = getTransitionEffect(location.pathname);

  return (
    <>
      <Navbar />
      
      <div className="main-content">
        <AnimatePresence>
          <motion.div
            key={location.pathname}
            initial={transitionEffect.initial}
            animate={transitionEffect.animate}
            exit={transitionEffect.exit}
            transition={{ duration: 0.5 }}
            className="page"
          >
            <Routes location={location} key={location.pathname}>
              <Route path="" element={
                <>
                  <PortfolioIntro />
                  <Experience />
                  <Skill />
                  <AboutMe />
                  <Education/>
                </>
              } />
              <Route path="/project" element={<Project />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}

export default App;
