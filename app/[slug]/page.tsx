import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import { Comments, Menu } from "@/components";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <div className={styles.userDetails}>
            <div className={styles.userImageContainer}>
              <Image
                className={styles.avator}
                src={"/display-icons/categories/p1.jpeg"}
                alt="img"
                fill
              />
            </div>
            <div className={styles.userTextContainer}>
              <div className={styles.username}>John Doe</div>
              <div className={styles.date}>11.2.2024</div>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={"/display-icons/categories/p1.jpeg"}
            alt="img"
            fill
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p className={styles.para}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              dolorum quis unde, dignissimos est nemo magnam alias soluta culpa
              ipsam ducimus, eos dolor veniam autem rem rerum. Quasi, voluptas
              nemo.
            </p>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
            </h3>
            <p className={styles.para}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              dolorum quis unde, dignissimos est nemo magnam alias soluta culpa
              ipsam ducimus, eos dolor veniam autem rem rerum. Quasi, voluptas
              nemo.
            </p>
            <p className={styles.para}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              dolorum quis unde, dignissimos est nemo magnam alias soluta culpa
              ipsam ducimus, eos dolor veniam autem rem rerum. Quasi, voluptas
              nemo.
            </p>
            <p className={styles.para}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              dolorum quis unde, dignissimos est nemo magnam alias soluta culpa
              ipsam ducimus, eos dolor veniam autem rem rerum. Quasi, voluptas
              nemo.
            </p>
          </div>
          <div className={styles.commentsContainer}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
