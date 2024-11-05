import Lottie from "lottie-react";
import anim from "../data/data.json";
import styles from "../styles/Loading.module.css";

export default function Player_lottie() {
  return (
    <div id={styles.loading}>
      <div id={styles.starsAnim}>
        <Lottie animationData={anim} />
      </div>
    </div>
  );
}
