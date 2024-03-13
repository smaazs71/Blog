import React from "react";
import styles from "./blogPage.module.css";
import { CardList, Menu } from "@/components";

const page = ({ searchParams }: { searchParams: any }) => {
  const page = parseInt(searchParams.page) || 1;

  const { category } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{category}</h1>
      <div className={styles.content}>
        <CardList page={page} category={category} />
        <Menu />
      </div>
    </div>
  );
};

export default page;
