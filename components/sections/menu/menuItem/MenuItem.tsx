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
    <Link href={`/posts/${post.slug}`} className={styles.item}>
      {flag === "withoutImage" ? (
        ""
      ) : (
        <>
          {post.img && (
            <div className={styles.imageContainer}>
              <Image src={post.img} alt="" fill className={styles.image} />
            </div>
          )}
        </>
      )}
      <div className={styles.textContainer}>
        <span
          style={post.customStyles}
          className={`${styles.category} ${
            styles[post.cat?.title || post.catSlug]
          }`}
        >
          {post.cat?.title}
        </span>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <div className={styles.details}>
          <span className={styles.author}>{post.user?.name}</span>
          <span> - </span>
          <span className={styles.date}>
            {post.createdAt.toString().substring(0, 10)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
