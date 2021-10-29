import { useCallback } from 'react';
import createPersistedState from 'use-persisted-state';
const useCounterState = createPersistedState('count');

type ThemeValues = 'dark' | 'light';

const useSharedTheme = (initialTheme: ThemeValues) => {
  const [theme, setTheme] = useCounterState<ThemeValues>(initialTheme);

  const toggle = useCallback(() => setTheme(theme === 'dark' ? 'light' : 'dark'), [setTheme, theme]);
  const setLight = useCallback(() => setTheme('light'), [setTheme]);
  const setDark = useCallback(() => setTheme('dark'), [setTheme]);

  return {
    toggle,
    setLight,
    setDark,
    theme
  };
};

export default useSharedTheme;