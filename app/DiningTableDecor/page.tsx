import Image from "next/image";
import { Data, dinningTableDecor } from "@/public/images/data";

const DinningTableDecor = () => {
  return (
    <div style={{ marginTop: 60 }}>
      {dinningTableDecor.map((item: Data) => {
        return (
          <Image
            //placeholder="blur"
            quality={100}
            priority
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

export default DinningTableDecor;
