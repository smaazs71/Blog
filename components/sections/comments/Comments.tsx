"use client";
import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { commentTypes } from "@/types";
import { useState } from "react";
import { json } from "stream/consumers";
import { DOMAIN_NAME } from "@/constants/apiEndPoints";

const fetcher = async (url: any): Promise<commentTypes[]> => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

const Comments = ({ postSlug }: { postSlug: string }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `${DOMAIN_NAME}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    await fetch(`${DOMAIN_NAME}/api/comments`, {
      method: "POST",
      body: JSON.stringify({ desc: comment, postSlug }),
    });
    setComment("");
    mutate();
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment...."
            className={styles.input}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href={"login"}>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((comment) => (
              <div className={styles.comment}>
                <div className={styles.userDetails}>
                  {comment.user?.image && (
                    <div className={styles.userImageContainer}>
                      <Image
                        className={styles.avator}
                        src={comment.user.image}
                        alt="img"
                        fill
                      />
                    </div>
                  )}
                  <div className={styles.userTextContainer}>
                    <div className={styles.username}>{comment.user?.name}</div>
                    <div className={styles.date}>
                      {comment.createdAt.toString().substring(0, 10)}
                    </div>
                  </div>
                </div>
                <div className={styles.commentText}>{comment.desc}</div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
