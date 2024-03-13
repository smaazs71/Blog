import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { postTypes } from "@/types";

interface CardProps {
  post: postTypes;
}
const Card = ({ post }: CardProps) => {
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imageContainer}>
          <Image
            src={post.img}
            alt="card image"
            fill
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>
            {post.createdAt.toString().substring(0, 10)}
          </span>
          <span> - </span>
          <span className={styles.category}>{post.catSlug}</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h1 className={styles.title}>{post.title}</h1>
        </Link>
        <p className={styles.description}>{post.desc.substring(0,60)}</p>
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
