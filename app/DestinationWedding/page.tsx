import Image from "next/image";
import { Data, destinationWedding } from "@/public/images/data";

const DestinationWedding = () => {
  return (
    <div>
      {destinationWedding.map((item: Data) => {
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

export default DestinationWedding;
