import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const routes = [
  {
    path: "/",
    name: "Tháng mười hai",
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
    path: "/DinningTableDecor",
    name: "Dinning Table Decor",
  },
  {
    path: "/DestinationWedding",
    name: "Destination Wedding",
  },
  {
    path: "/BallroomWedding",
    name: "Ballroom Wedding",
  },
];
export const metadata: Metadata = {
  title: "Thang 12",
  description: "",
};

const myFont = localFont({
  src: [
    {
      path: "./font/Gotham-MediumIta.otf",
      weight: "400",
    },
    {
      path: "./font/Gotham-Medium.otf",
      weight: "300",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="Wrapper">
          <nav className="navBar">
            {routes.map((route) => {
              return (
                <div
                  className={myFont.className}
                  style={{ fontWeight: 300 }}
                  key={route.path}
                >
                  <Link href={route.path}>{route.name}</Link>
                </div>
              );
            })}
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
