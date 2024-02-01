
import React from "react";
import { motion } from "framer-motion";
import styles from "./MotionCover.module.css";

export default function MotionCover({ image }: { image: string }) {
  return (
    <motion.section
      className={styles.cover}
      // initial={{ opacity: 1, }}
      // animate={{ opacity: 0,  display: "none"}}
      initial={{ height: '100vh', }}
      animate={{ height: 0,}}
      transition={{ duration: 1, delay: 1 }}
    >
      <motion.img
        initial={{ height: '100vh', }}
        animate={{ height: 0,}}
        transition={{ duration: 1, delay: 1 }}
        src={image}
        alt="Картинки из Якутии"
        className={styles.image}
      />
    </motion.section>
  );
}
