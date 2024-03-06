import Image from "next/image";
import React from "react";
import styles from "./auth.module.css";

const Auth = () => {
  const status = "not-authenticated";
  return (
    <>
      {status === "authenticated" ? (
        <Image
          className={styles.accountProfilePicture}
          src={"/display-icons/default-profile-picture.jpeg"}
          alt="profile picture"
          width={37}
          height={37}
        />
      ) : (
        <span>Login</span>
      )}
    </>
  );
};

export default Auth;
