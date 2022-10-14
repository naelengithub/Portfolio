import { useState } from "react";
import { useEffect } from "react";

export default function Fader({ text }) {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in",
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade-in") {
        setFadeProp({
          fade: "fade-out",
        });
      } else {
        setFadeProp({
          fade: "fade-in",
        });
      }
    }, 4000);
    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <div>
      <h1 className={fadeProp.fade}>{text}</h1>
    </div>
  );
}
