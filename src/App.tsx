import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import PortfolioIntro from './Components/Hero';
import Experience from './Components/Experience';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Blog from './Components/Blog';
import AboutMe from './Components/About';
import Contact from './Components/Contact';
import Education from "./Components/Education";

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [currentPage, setCurrentPage] = useState('main');
  const [isInverted, setIsInverted] = useState(false);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const toggleInversion = () => {
    setIsInverted(prev => !prev);
  };

  useEffect(() => {
    document.body.className = `${theme} ${isInverted ? 'inverted' : ''}`;
  }, [theme, isInverted]);

  const renderContent = () => {
    switch (currentPage) {
      case 'blog':
        return <Blog />;
      case 'about':
        return <AboutMe />;
      case 'contact':
        return <Contact />;
      case 'projects':
        return <Project />;
      default:
        return (
          <>
            <section id="home"><PortfolioIntro /></section>
            <section id="experience"><Experience /></section>
            <section id="skills"><Skill /></section>
            {/* <section id="projects"><Project /></section> */}
            <section id="education"><Education /></section>
          </>
        );
    }
  };

  return (
    <div className="app">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        setCurrentPage={setCurrentPage}
        isInverted={isInverted}
        toggleInversion={toggleInversion}
      />
      <div className="main-content">
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}

export default App;