import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment...."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href={"login"}>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
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
          <div className={styles.commentText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic facere
            consectetur obcaecati harum debitis ad.
          </div>
        </div>

        <div className={styles.comment}>
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
          <div className={styles.commentText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic facere
            consectetur obcaecati harum debitis ad.
          </div>
        </div>
        <div className={styles.comment}>
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
          <div className={styles.commentText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic facere
            consectetur obcaecati harum debitis ad.
          </div>
        </div>
        <div className={styles.comment}>
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
          <div className={styles.commentText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic facere
            consectetur obcaecati harum debitis ad.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
