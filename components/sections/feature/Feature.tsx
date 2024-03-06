import React from "react";
import styles from "./feature.module.css";
import Image from "next/image";

const Feature = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey, here we are!</b> Discover my stories and
        creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src={"/display-icons/categories/p1.jpeg"}
            alt="img"
            fill
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            voluptatibus quisquam? Quam laudantium reiciendis ducimus quod modi
            minima doloremque harum neque, optio autem esse illo commodi
            perferendis numquam fugiat enim.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
