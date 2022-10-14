import { useState } from "react";
import { useEffect } from "react";
import styles from "./fader.module.css";

export default function Fader({ text }) {
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
    }, 4000);
    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <div className={fadeProp.fade ? styles.fadeOut : styles.fadeIn}>
      <h1>{text}</h1>
    </div>
  );
}
