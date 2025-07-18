import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div style={{ marginTop: 60 }} className="Wrapper">
      <Image
        className={styles.desktopImage}
        rel="preload"
        quality={100}
        width={1200}
        height={1200}
        style={{ width: "100%", height: "auto" }}
        sizes="(max-width: 768px) 60vw, (max-width: 1300px) 80vw, 100vw"
        src={
          "https://thang12.s3.ap-southeast-1.amazonaws.com/TMH_port+1_web-opening.jpg"
        }
        alt="Thang12"
      />

      <Image
        className={styles.mobileImage}
        rel="preload"
        quality={100}
        width={1200}
        height={1200}
        style={{ width: "100%", height: "70vh", objectFit: "cover" }}
        sizes="(max-width: 768px) 60vw, (max-width: 1300px) 80vw, 100vw"
        src={
          "https://thang12.s3.ap-southeast-1.amazonaws.com/COVER_MOBILE-01-min.jpg"
        }
        alt="Thang12"
      />
    </div>
  );
}
