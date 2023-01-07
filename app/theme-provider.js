'use client';

import { createContext, useState } from 'react';
import usePresistState from '../components/usePresistState';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = usePresistState('dark_mode', false)
  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <div className={" " + (darkMode ? "dark" : "")}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}