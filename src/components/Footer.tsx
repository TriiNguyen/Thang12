"use client";

import React from "react";
import css from "./styles.module.scss";
import clsx from "clsx";
import { myFont } from "./Navbar";
import Image from "next/image";
import fb from "../../public/images/facebook.svg";
import ins from "../../public/images/instagram.svg";
import gmail from "../../public/images/gmail.svg";
import Link from "next/link";
import Logo from "../../public/images/TMH_logo.svg";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";
  return (
    <div className={clsx(css.Wrapper, myFont.className)}>
      <div className={clsx(css.thang12, { [css.isHidden]: isHomePage })}>
        <Image width={300} alt="thang12" src={Logo} />
      </div>
      <div className={css.Categories}>
        <span>Destination Wedding</span>
        <span>Ballroom Wedding</span>
        <span>Traditional Ceremony</span>
        <span>Private Party </span>
        <span>Table Decoration </span>
      </div>
      <div className={css.Socials}>
        <Link
          href={"https://www.facebook.com/thangmuoihai.decor"}
          target="_blank"
        >
          <Image
            width={20}
            height={20}
            className={css.SocialsItem}
            alt="fb"
            src={fb}
          />
        </Link>
        <Link
          href={"https://www.instagram.com/thangmuoihai.decor"}
          target="_blank"
        >
          <Image
            width={20}
            height={20}
            className={css.SocialsItem}
            alt="fb"
            src={ins}
          />
        </Link>
        <a href="mailto:info.thangmuoihai@gmail.com">
          <Image
            width={20}
            height={20}
            className={css.SocialsItem}
            alt="fb"
            src={gmail}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
