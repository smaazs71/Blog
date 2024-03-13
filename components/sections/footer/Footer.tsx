import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerRights}>
        <Image
          src={"/logo/Uchiha-Mugiwara-logos-black.png"}
          alt="logo"
          width={224}
          height={44}
          priority={false}
        />
        <p className={styles.rightsText}>
          M. Maaz Shaikh @2024
          <br />
          All rights reserved ©
        </p>
      </div>
      <div className={styles.footerLinks}>
        {footerLinks.map((section) => (
          <div className={styles.footerLinksSection}>
            <div className={styles.footerLinksTitle}>{section.title}</div>
            {section.links.map((link) => (
              <Link href={link.url} className={styles.footerLink}>
                <span className={styles.footerLinkImg}>
                  {link.image_path && link.image_path !== "" && (
                    <Image
                      src={link.image_path}
                      alt={link.title + " logo"}
                      width={31}
                      height={31}
                    />
                  )}
                </span>
                <span className={styles.footerLinkText}>{link.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
