"use client";

import { createContext, useEffect, useState } from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

const getFromLocalStorage = () => {
  if (typeof window !== undefined) {
    return localStorage.getItem("theme") || "light";
  }
  return "light";
};

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
