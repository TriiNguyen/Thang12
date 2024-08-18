import Image from "next/image";
import { ballroomWedding, Data } from "@/public/images/data";

const BallroomWedding = () => {
  return (
    <div style={{ marginTop: 60 }}>
      {ballroomWedding.map((item: Data) => {
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

export default BallroomWedding;
