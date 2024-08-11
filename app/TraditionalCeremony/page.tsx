"use client";

import Image from "next/image";
import { Data, traditionalCeremony } from "@/public/images/data";
import { useState } from "react";

const TraditionalCeremony = () => {
  const [loading, setloading] = useState(false);
  return (
    <div>
      {traditionalCeremony.map((item: Data) => {
        return loading ? (
          <p>loading</p>
        ) : (
          <Image
            onLoad={() => setloading(false)}
            key={item.name}
            rel="preload"
            width={0}
            height={0}
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
