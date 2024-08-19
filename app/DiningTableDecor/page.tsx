import Image from "next/image";
import { Data, dinningTableDecor } from "@/public/images/data";
import { getPlaceholderImage } from "@/src/utils/utils";

const DinningTableDecor = async () => {
  const imageWithPlaceholder = await Promise.all(
    dinningTableDecor.map(async (item) => {
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
            placeholder="blur"
            blurDataURL={item?.placeholder?.placeholder ?? ""}
            quality={100}
            priority
            key={item.name}
            rel="preload"
            width={1200}
            height={1200}
            sizes="(max-width: 768px) 60vw, (max-width: 1300px) 80vw, 100vw"
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
