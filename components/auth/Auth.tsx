"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import styles from "./auth.module.css";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const Auth = () => {
  const { data, status } = useSession();

  const router = useRouter();

  const pathname = usePathname();

  return (
    <>
      {status === "authenticated" && data && data.user ? (
        <Image
          onClick={() => signOut()}
          className={styles.accountProfilePicture}
          src={data.user.image || "/display-icons/default-profile-picture.jpeg"}
          alt="profile picture"
          width={37}
          height={37}
        />
      ) : pathname === "/login" ? (
        ""
      ) : (
        <span className={styles.login} onClick={() => router.push("/login")}>
          Login
        </span>
      )}
    </>
  );
};

export default Auth;
