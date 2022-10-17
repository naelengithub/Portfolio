import styles from "./homepageOverview.module.css";
import { useState } from "react";

export default function HomepageOverview() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.one}></div>
        <div className={styles.two}>Two</div>
        <div className={styles.three}>Three</div>
        <div className={styles.four}>Four</div>
        <div className={styles.five}>Five</div>
        <div className={styles.six}>six</div>
        <div className={styles.sixImage}></div>
        <div className={styles.seven}>seven</div>
        <div className={styles.eight}>eight</div>
        <div className={styles.nine}>nine</div>
        <div className={styles.ten}>ten</div>
      </div>
    </div>
  );
}
