import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "../src/components/Navbar";
import Footer from "@/src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thang 12",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="https://thang12.s3.ap-southeast-1.amazonaws.com/TRADITIONAL+CEREMONY/TMH_port+1_web-T01.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="https://thang12.s3.ap-southeast-1.amazonaws.com/PRIVATE+PARTY/TMH_port+1_web-P01.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="https://thang12.s3.ap-southeast-1.amazonaws.com/DINING+TABLE+DECOR/TMH_port+1_web-28.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="https://thang12.s3.ap-southeast-1.amazonaws.com/DESTINATION+WEDDING/TMH_port+1_web-D01.jpg"
        />
        <link
          rel="preload"
          as="image"
          href="https://thang12.s3.ap-southeast-1.amazonaws.com/BALLROOM+WEDDING/TMH_port+1_web-05.jpg"
        />
      </head>
      <body className={inter.className}>
        <div className="Wrapper">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
