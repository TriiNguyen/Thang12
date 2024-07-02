import Image from "next/image";
import image from "../public/images/TMH.png";
import "./page.module.css";

export default function Home() {
  return (
    <div className="Wrapper">
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
}
