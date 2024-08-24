"use client";

import Image from "next/image";
import "./page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    console.log("haha");
    router.prefetch("/DestinationWedding");
  }, []);

  return (
    <div style={{ marginTop: 60 }} className="Wrapper">
      <Image
        rel="preload"
        quality={100}
        priority
        width={1200}
        height={1200}
        style={{ width: "100%", height: "auto" }}
        sizes="(max-width: 768px) 60vw, (max-width: 1300px) 80vw, 100vw"
        src={
          "https://thang12.s3.ap-southeast-1.amazonaws.com/TMH_port+1_web-opening.jpg"
        }
        alt="Thang12"
      />
    </div>
  );
}
