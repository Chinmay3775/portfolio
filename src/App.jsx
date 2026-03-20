import React, { useEffect, useState } from 'react';
import './index.css';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';

/* ─── Hook: Intersection Observer for scroll-reveal ─── */
const useScrollReveal = (isLoading) => {
  useEffect(() => {
    if (isLoading) return; // Wait until loader is done
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [isLoading]);
};

/* ─── Root App Component ─── */
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useScrollReveal(isLoading);

  useEffect(() => {
    if (isLoading) return;

    const handleGlobalMouseMove = (e) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);

    const cards = document.querySelectorAll(".project-card");
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.onmousemove = e => {
        for (const card of cards) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      };
    }
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [isLoading]);

  return (
    <>
      <div className="bg-grid" />
      <div className="bg-grid-interactive" />
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      {isLoading ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : (
        <div className="app-content-fade-in">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Achievements />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
};

export default App;