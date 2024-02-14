import { useState } from "react";
import styles from "./Footer.module.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Footer() {
  const { scrollY } = useScroll();
  const [width, setWidth] = useState(-10);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setWidth((latest * 100) / (document.documentElement.scrollHeight - 800));
  });

  return (
    <motion.div
      style={{ right: `${width}%` }}
      className={styles.footer}
    ></motion.div>
  );
}
