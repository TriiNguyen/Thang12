"use client";

import Image from "next/image";
import { Data, traditionalCeremony } from "@/public/images/data";
import { useState } from "react";

const TraditionalCeremony = () => {
  const [loading, setloading] = useState(false);
  return (
    <div style={{ marginTop: 60 }}>
      {traditionalCeremony.map((item: Data) => {
        return loading ? (
          <p>loading</p>
        ) : (
          <Image
            //placeholder="blur"
            quality={100}
            priority
            onLoad={() => setloading(false)}
            key={item.name}
            rel="preload"
            width={1200}
            height={500}
            //sizes="(max-width: 768px) 60vw, (max-width: 1200px) 80vw, 100vw"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src={item.src}
            alt="Thang12"
          />
        );
      })}
    </div>
  );
};

export default TraditionalCeremony;
