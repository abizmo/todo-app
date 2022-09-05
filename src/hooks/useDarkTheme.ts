import { useEffect, useState } from 'react';

const prefersTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const body = document.body;

const useDarkTheme = () => {
  const [isDark, setIsDark] = useState(prefersTheme);

  useEffect(() => {
    body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  return { isDark, toggleTheme };
};

export default useDarkTheme;
