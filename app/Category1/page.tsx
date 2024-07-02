import Image from "next/image";
import image from "../../public/images/Kathy.png";

const Category1 = () => {
  return (
    <div>
      <Image
        rel="preload"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        src={image}
        alt="Thang12"
      />
    </div>
  );
};

export default Category1;
