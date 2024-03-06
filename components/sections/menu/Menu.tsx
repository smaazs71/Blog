import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "./menuItem/MenuItem";
import { categories, posts } from "@/constants";

const Menu = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.subTitle}>What's hot</h2>

        <h1 className={styles.title}>Most Popular</h1>
        <div className={styles.items}>
          {posts.map((post) => (
            <MenuItem post={post} flag={"withoutImage"} />
          ))}
        </div>
      </div>
      <div className="">
        <h2 className={styles.subTitle}>Discover by topic</h2>
        <h1 className={styles.title}>Categories</h1>
        <div className={styles.categoryList}>
          {categories.map((category) => (
            <Link
              href={category.href}
              className={`${styles.categoryItem} ${styles[category.title]}`}
              style={category.customStyles}
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h2 className={styles.subTitle}>Chosen by the editor</h2>
        <h1 className={styles.title}>Editors Pick</h1>
        <div className={styles.items}>
          {posts.map((post) => (
            <MenuItem post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
