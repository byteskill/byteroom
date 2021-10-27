import { useCallback, useState } from "react";
import { useBetween } from "use-between";

const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const toggle = useCallback(() => setTheme(theme === 'dark' ? 'light' : 'dark'), [theme]);
  const setLight = useCallback(() => setTheme('light'), []);
  const setDark = useCallback(() => setTheme('dark'), []);
  return {
    toggle,
    setLight,
    setDark
  }
};

const useSharedTheme = () => useBetween(useTheme);

export default useSharedTheme;
