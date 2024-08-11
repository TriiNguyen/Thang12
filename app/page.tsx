import Image from "next/image";
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
        src={
          "https://thang12.s3.ap-southeast-1.amazonaws.com/TMH_port+1_web-opening.jpg"
        }
        alt="Thang12"
      />
    </div>
  );
}
