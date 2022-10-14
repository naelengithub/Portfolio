import styles from "./homepageOverview.module.css";

export default function HomepageOverview() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.h1}>Hey there,</h1>
        <h2 className={styles.h2}>Im Eli</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.one}></div>
        <div className={styles.two}>Two</div>
        <div className={styles.three}>Three</div>
        <div className={styles.four}>Four</div>
        <div className={styles.five}>Five</div>
      </div>
    </div>
  );
}
