import React from "react";
import { motion } from "framer-motion";
import styles from "./Title.module.css";

interface ITitle {
  text: string;
  margin?: string;
}
export default function Title({ text, margin }: ITitle) {
  return (
    <motion.h3
      style={{ margin }}
      className={styles.title}
      initial={{ x: "-50vw", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.h3>
  );
}
