import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const routes = [
  {
    path: "/",
    name: "Tháng mười hai",
  },
  {
    path: "/Category1",
    name: "When Ly met Kathy",
  },
  {
    path: "/Category2",
    name: '"Birds" of Paradise',
  },
  {
    path: "/Category3",
    name: "A Lush Garden",
  },
];

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
                <div key={route.path}>
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
