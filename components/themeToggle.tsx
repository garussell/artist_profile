import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(storedTheme);

    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const setDarkTheme = () => {
    setTheme('dark');
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
  };

  const setLightTheme = () => {
    setTheme('light');
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
  };

  return (
    <div>
      {theme === 'dark' ? (
        <button onClick={setLightTheme} className="p-2 text-white text-3xl">
          <FontAwesomeIcon icon={faSun} />
        </button>
      ) : (
        <button onClick={setDarkTheme} className="p-2 text-black text-3xl">
          <FontAwesomeIcon icon={faMoon} />
        </button>
      )}
    </div>
  );
};
