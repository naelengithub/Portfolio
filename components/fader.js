import { useState } from "react";
import { useEffect } from "react";
import styles from "./fader.module.css";
import Image from "next/image";

export default function Fader({ src }) {
  const [fadeProp, setFadeProp] = useState({
    fade: true,
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === true) {
        setFadeProp({
          fade: false,
        });
      } else {
        setFadeProp({
          fade: true,
        });
      }
    }, 3000);
    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <div className={fadeProp.fade ? styles.fadeOut : styles.fadeIn}>
      {/* <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={styles.image}
      /> */}
    </div>
  );
}
