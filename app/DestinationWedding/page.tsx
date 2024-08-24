import Image from "next/image";
import { Data, destinationWedding } from "@/public/images/data";
import { getPlaceholderImage } from "@/src/utils/utils";

const DestinationWedding = async () => {
  const imageWithPlaceholder = await Promise.all(
    destinationWedding.map(async (item) => {
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
            sizes="(max-width: 768px) 40vw, (max-width: 1500px) 60vw, 80vw"
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

export default DestinationWedding;
