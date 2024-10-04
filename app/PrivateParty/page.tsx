import { Data, privateParty } from "@/src/newData";
import { getPlaceholderImage } from "@/src/utils/utils";
import Image from "next/image";

const PrivateParty = async () => {
  const imageWithPlaceholder = await Promise.all(
    privateParty.map(async (item) => {
      const imageWithPlaceholder = await getPlaceholderImage(item.src);
      return {
        ...item,
        placeholder: imageWithPlaceholder,
      };
    })
  );
  return (
    <div style={{ marginTop: 60 }}>
      {imageWithPlaceholder.map((item: Data) => {
        return (
          <Image
            priority
            key={item.name}
            width={1200}
            height={1200}
            sizes="(max-width: 768px) 60vw, (max-width: 1500px) 80vw, 100vw"
            style={{ width: "100%", height: "auto" }}
            placeholder="blur"
            blurDataURL={item?.placeholder?.placeholder ?? ""}
            src={item.src}
            alt="Thang12"
          />
        );
      })}
    </div>
  );
};

export default PrivateParty;
