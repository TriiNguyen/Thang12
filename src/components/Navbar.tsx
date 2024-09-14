"use client";

import clsx from "clsx";
import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import css from "./styles.module.scss";
import { Button } from "antd";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

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
    path: "/PrivateParty",
    name: "Private Party",
  },
  {
    path: "/TraditionalCeremony",
    name: "Traditional Ceremony",
  },

  {
    path: "/TableDecoration",
    name: "Table Decoration",
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
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <nav className={css.navBar}>
        <div className={css.DesktopNavbar}>
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
        </div>
        <div className={css.MobileNavbar}>
          <Button type="default" onClick={() => setIsShow(!isShow)}>
            {isShow ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>

          <div
            className={clsx(css.MobileNavbarWrapper, {
              [css.MobileNavbarWrapperShow]: isShow,
            })}
          >
            {routes.map((route) => {
              return (
                <Link
                  href={route.path}
                  className={clsx(myFont.className, css.LinkMobile)}
                  style={{
                    fontWeight: pathName === route.path ? 300 : 500,
                    color: "black",
                  }}
                  key={route.path}
                  rel="prefetch"
                  prefetch={true}
                  onClick={() => setIsShow(false)}
                >
                  {route.name.toUpperCase()}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};
