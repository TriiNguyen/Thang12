import { Data, privateParty } from "@/public/images/data";
import Image from "next/image";

const PrivateParty = () => {
  return (
    <div>
      {privateParty.map((item: Data) => {
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

export default PrivateParty;
