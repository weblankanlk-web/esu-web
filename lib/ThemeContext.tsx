"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: any) => {
  const [color, setColor] = useState(() => {
    return localStorage.getItem("themeColor") || "#00AECD";
  });

  console.log(color);

  useEffect(() => {
    const savedColor = localStorage.getItem("themeColor");
    if (savedColor) {
      setColor(savedColor);
      document.documentElement.style.setProperty(
        "--main-title-color",
        savedColor
      );
    }
  }, [color]);

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
