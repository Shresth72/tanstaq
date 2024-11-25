import React, { createContext, useState, useContext, ReactNode } from "react";

interface ThemeContextType {
  theme: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes = {
  light: {
    primary: "#007bff",
    secondary: "#6c757d",
    background: "#ffffff",
    text: "#000000",
    button: "#282834",
    buttonText: "#cbd1e8",
  },
  dark: {
    primary: "#0056b3",
    secondary: "#495057",
    background: "#050505",
    text: "#ffffff",
    button: "#282834",
    buttonText: "#cbd1e8",
  },
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const value = {
    theme,
    colors: themes[theme],
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
