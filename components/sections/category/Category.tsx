import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/constants";

const Category = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link
            href={category.href}
            className={` ${styles.category} 
            ${styles[category.title]} 
            `}
            style={category.customStyles}
          >
            <Image
              src={category.image}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
