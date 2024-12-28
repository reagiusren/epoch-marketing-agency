'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services']; // Add more sections as needed
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white">Epoch</div>
        <div className="flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('hero')}
            className={`text-gray-300 hover:text-white cursor-pointer ${
              activeSection === 'hero' ? 'text-white font-semibold' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')} // Use lowercase 'services'
            className={`text-gray-300 hover:text-white cursor-pointer ${
              activeSection === 'services' ? 'text-white font-semibold' : ''
            }`}
          >
            Services
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;