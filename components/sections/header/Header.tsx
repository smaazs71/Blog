"use client"
import Image from "next/image";
import React from "react";
import styles from "./header.module.css";
import { Auth, ThemeToggle } from "@/components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const onSubmit = () => {

  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image
          src={"/logo/Uchiha-Mugiwara-logos-black.png"}
          alt="logo"
          className={""}
          width={224}
          height={44}
          priority={true}
        />
      </div>
      <div className={styles.centerHeader}>
{pathname === '/write' ? '' :        <div className={styles.writeIcon} onClick={() => {router.push('/write')}}>
          <Image
            src={"/button-icons/write-icon.png"}
            alt="new blog"
            width={43}
            height={43}
          />
        </div>}
        <form action={onSubmit} className={styles.searchForm}>
          <input type="text" className={styles.searchInput} />
          <button className={styles.searchImgBtn} type="submit">
            <Image
              className={styles.searchImg}
              src={"/button-icons/magnifying-glass.svg"}
              alt="seacrh icon"
              width={30}
              height={30}
            />
          </button>
        </form>
      </div>
      <div className={styles.auth}>
        <ThemeToggle />
        <Link href={""} className="">
          Contact
        </Link>
        <Link href={""} className="">
          About
        </Link>
        <Auth />
      </div>
    </div>
  );
};

export default Header;
