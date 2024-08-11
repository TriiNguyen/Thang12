import Image from "next/image";
import { ballroomWedding, Data } from "@/public/images/data";

const BallroomWedding = () => {
  return (
    <div>
      {ballroomWedding.map((item: Data) => {
        return (
          <Image
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
