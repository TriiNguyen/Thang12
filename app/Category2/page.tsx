import Image from "next/image";
import image from "../../public/images/Birds.png";

const Category2 = () => {
  return (
    <div>
      <Image
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

export default Category2;
