import React from "react";
import styles from "./cardList.module.css";
import { Card, Pagination } from "@/components";
import { postTypes } from "@/types";
import { POSTS_PER_PAGE } from "@/constants/posts";
import { getPosts } from "@/services/posts";
import { DOMAIN_NAME, POSTS_API } from "@/constants/apiEndPoints";

const getData = async (
  page: number,
  category?: string
): Promise<{ count: number; posts: postTypes[] }> => {
  const res = await fetch(
    `${DOMAIN_NAME}${POSTS_API}?page=${page}&sortRecent=desc&category=${
      category || ""
    }`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};

interface CardListProps {
  page: number;
  category?: string;
}

const CardList = async ({ page, category }: CardListProps) => {
  // const { posts, count } = await getData(page, category);
  const { posts, count } = await getPosts(page, 3, category);

  // const POST_PER_PAGE = 3;
  const hasPrev = page > 1;
  const hasNext = POSTS_PER_PAGE * page < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
