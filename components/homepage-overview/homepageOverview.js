import styles from "./homepageOverview.module.css";
// import Fader from "../fader";
// import ComicImage1 from "../../public/images/comicImage1.jpg";

export default function HomepageOverview() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.h1}>Hey there,</h1>
        <h2 className={styles.h2}>Im Eli</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.one}></div>
        <div className={styles.two}></div>
        <div className={styles.three}></div>
        <div className={styles.four}></div>
        <div className={styles.five}>
          <div></div>
        </div>
      </div>
    </div>
  );
}
