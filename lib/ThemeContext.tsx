"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: any) => {
  const [color, setColor] = useState("#00AECD"); // default color

  // On client mount, update from localStorage
  useEffect(() => {
    const savedColor = localStorage.getItem("themeColor");
    if (savedColor) {
      setColor(savedColor);
      document.documentElement.style.setProperty("--main-title-color", savedColor);
    } else {
      document.documentElement.style.setProperty("--main-title-color", "#00AECD");
    }
  }, []);

  // Update localStorage and CSS var when color changes
  useEffect(() => {
    if (typeof window !== "undefined" && color) {
      localStorage.setItem("themeColor", color);
      document.documentElement.style.setProperty("--main-title-color", color);
    }
  }, [color]);

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
