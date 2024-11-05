"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/footerBtn.module.css";

export default function Footer({ path }) {
  const router = useRouter();
  function handleClick() {
    router.push(path);
  }
  return (
    <button onClick={handleClick} id={styles.footerBtn}>
      切换
    </button>
  );
}
