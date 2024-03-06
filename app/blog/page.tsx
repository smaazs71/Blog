import React from "react";
import styles from "./blogPage.module.css";
import { CardList, Menu } from "@/components";

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog Page</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default page;
