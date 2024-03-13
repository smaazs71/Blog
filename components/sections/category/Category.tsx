import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@/services/categories";


const Category = async () => {
  const data = await getCategories();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((category) => (
          <Link
            key={category._id}
            href={`/blog?category=${category.slug}`}
            className={` ${styles.category} 
            ${styles[category.title]} 
            `}
            // style={category.customStyles}
          >
            {category.img && (
              <Image
                src={category.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
