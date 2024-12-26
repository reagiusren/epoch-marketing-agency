'use client';

import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
    >
      {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-purple-400" />}
    </button>
  );
};

export default ThemeToggle;