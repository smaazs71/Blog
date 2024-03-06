import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerRights">
        <Image
          src={"/logo/Uchiha-Mugiwara-logos-black.png"}
          alt="logo"
          width={131}
          height={43}
        />
        <p className="rightsText">
          M. Maaz Shaikh @2024
          <br />
          All rights reserved ©
        </p>
      </div>
      <div className="footerLinks">
        {footerLinks.map((section) => (
          <div className="footerLinksSection">
            <div className="footerLinksTitle">{section.title}</div>
            {section.links.map((link) => (
              <Link href={link.url} className="footerLink">
                <span className="footerLinkImg">
                  {link.image_path && link.image_path !== "" && (
                    <Image
                      src={link.image_path}
                      alt={link.title + " logo"}
                      width={31}
                      height={31}
                    />
                  )}
                </span>
                <span className="footerLinkText">{link.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
