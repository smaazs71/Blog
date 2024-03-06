import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={"/display-icons/categories/p1.jpeg"}
          alt="card image"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023</span>
          <span> - </span>
          <span className={styles.category}>CULtUrE</span>
        </div>
        <Link href={"/"}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </Link>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
          mollitia a eum sit, asperiores perferendis maiores quisquam
          repellendus consectetur aspernatur adipisci dolores, ratione odit
          nihil modi facilis voluptates itaque id!
        </p>
        <Link href={"/"} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
