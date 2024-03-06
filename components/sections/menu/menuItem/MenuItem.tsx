import Link from "next/link";
import React from "react";
import styles from "./menuItem.module.css";
import Image from "next/image";
import { postTypes } from "@/types";

interface MenuItemProps {
  post: postTypes;
  flag?: String;
}

const MenuItem = ({ post, flag }: MenuItemProps) => {
  return (
    <Link href={post.href} className={styles.item}>
      {flag === "withoutImage" ? (
        ""
      ) : (
        <div className={styles.imageContainer}>
          <Image src={post.image} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <span
          style={post.customStyles}
          className={`${styles.category} ${styles[post.category]}`}
        >
          {post.category}
        </span>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <div className={styles.details}>
          <span className={styles.author}>{post.author}</span>
          <span> - </span>
          <span className={styles.date}>{post.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
