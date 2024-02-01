import styles from "./ButtonScroll.module.css";
import { motion, useScroll, useSpring } from "framer-motion";
import image from "../../../assets/images/background.jpg";
import { ReactNode } from "react";
import ArrowUp from "../icons/arrow-up/ArrowUp";
interface IButton {
  onClick?: () => void;
  borderRadius: string;
  rotate: string;
  right?: string;
}
export default function ButtonScroll({
  onClick,
  borderRadius,
  rotate,
  right,
}: IButton) {
  return (
    <motion.button
      // eslint-disable-next-line react/button-has-type
      type="button"
      className={styles.button}
      onClick={onClick}
    
      whileTap={{
        scale: 0.9,
      }}
      style={{borderRadius, rotate,  right }}
    >
      <ArrowUp />
    </motion.button>
  );
}
