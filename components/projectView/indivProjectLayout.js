import Image from "next/image";
import styles from "./indivProjectLayout";

export default function ProjectLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <Image src="/../../public/4.jpg" alt="" layout="fill" />
        <img src="/../public/4.jpg"></img>
        <Image src="" alt="" />
        <div className={styles.description}>
          <div className={styles.header}>
            <h1>Project XYZ</h1>
            <h2>Collaborators</h2>
            <h2>Date</h2>
          </div>
          <p></p>
          <button>Request more information</button>
        </div>
      </div>
      <div className={styles.bottomImage}>
        <Image src="/../public/4.jpg" alt="" width={400} height={500} />
      </div>
    </div>
  );
}
