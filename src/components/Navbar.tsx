"use client";

import clsx from "clsx";
import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import css from "./styles.module.scss";

const routes = [
  {
    path: "/",
    name: "Tháng mười hai",
  },
  {
    path: "/DestinationWedding",
    name: "Destination Wedding",
  },
  {
    path: "/BallroomWedding",
    name: "Ballroom Wedding",
  },
  {
    path: "/TraditionalCeremony",
    name: "Traditional Ceremony",
  },
  {
    path: "/PrivateParty",
    name: "Private Party",
  },
  {
    path: "/DiningTableDecor",
    name: "Dining Table Decor",
  },
];

export const myFont = localFont({
  src: [
    {
      path: "../../app/font/Gotham-Medium.otf",
      weight: "300",
    },
    {
      path: "../../app/font/Gotham-Book.otf",
      weight: "500",
    },
  ],
  display: "swap",
});

export const Navbar = () => {
  const pathName = usePathname();
  return (
    <div>
      <nav className={css.navBar}>
        {routes.map((route) => {
          return (
            <Link
              href={route.path}
              className={clsx(myFont.className, css.Link)}
              style={{
                fontWeight: pathName === route.path ? 300 : 500,
                color: "black",
              }}
              key={route.path}
              rel="prefetch"
              prefetch={true}
            >
              {route.name.toUpperCase()}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
