import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import { Comments, Menu } from "@/components";
import { postTypes } from "@/types";

const getData = async (slug: string): Promise<postTypes> => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};

const SinglePage = async ({ params }: { params: any }) => {
  const { slug } = params;

  const post = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.userDetails}>
            {post.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  className={styles.avator}
                  src={post.user.image}
                  alt="img"
                  fill
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <div className={styles.username}>{post.user?.name}</div>
              <div className={styles.date}>
                {post.createdAt.toString().substring(0, 10)}
              </div>
            </div>
          </div>
        </div>
        {post.img && (
          <div className={styles.imageContainer}>
            <Image className={styles.image} src={post.img} alt="img" fill />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post.desc }}
          />
          <div className={styles.commentsContainer}>
            <Comments postSlug={post.slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
