"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext/ThemeContext";
import styles from "./themeToggle.module.css";
import Image from "next/image";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${
      theme === "light" ? "bg-black" : "bg-white"
    } `} onClick={toggleTheme}>
      <Image src={"/button-icons/moon.png"} alt="moon" width={17} height={17} />
      <div
        className={`${styles.ball} ${
          theme === "light" ? "left-[2px] bg-white" : "left-[31px] bg-black"
        } `}
      ></div>
      <Image src={"/button-icons/sun.png"} alt="sun" width={17} height={17} />
    </div>
  );
};

export default ThemeToggle;
