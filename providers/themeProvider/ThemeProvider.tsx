"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext/ThemeContext";

const ThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const { theme } = useContext(ThemeContext);
  console.log("theme:");

  console.log(theme);

  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
