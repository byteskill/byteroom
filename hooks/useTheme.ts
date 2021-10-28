import { useCallback, useState, useEffect } from "react";
import { useBetween } from "use-between";

const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  /* TODO: Fix this code as it sets the mode of the page but not of the Nav
  useEffect(() =>
  {
    const savedMode = localStorage.getItem('colorMode');
    if(savedMode === 'light')
      setTheme(savedMode === 'light' ? 'light' : 'dark');
  }, []);*/

  useEffect(() => localStorage.setItem('colorMode', theme));

  const toggle = useCallback(() => setTheme(theme === 'dark' ? 'light' : 'dark'), [theme]);
  const setLight = useCallback(() => setTheme('light'), []);
  const setDark = useCallback(() => setTheme('dark'), []);
  return {
    toggle,
    setLight,
    setDark,
    theme
  }
};

const useSharedTheme = () => useBetween(useTheme);

export default useSharedTheme;
