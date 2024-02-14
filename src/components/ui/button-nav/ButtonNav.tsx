import styles from "./ButtonNav.module.css";
import { motion } from "framer-motion";
import ArrowUp from "../icons/arrow-up/ArrowUp";
interface IButton {
  onClick?: () => void;
  borderRadius: string;
  rotate: string;
  right?: string;
  bottom?: string;
  left?: string;
  opacity?: number;
  backgroundColor?: string;
}
export default function ButtonScroll({
  onClick,
  borderRadius,
  rotate,
  right,
  left,
  bottom,
  opacity,
  backgroundColor,
}: IButton) {
  return (
    <motion.button
      type="button"
      className={styles.button}
      onClick={onClick}
      whileTap={{
        scale: 0.9,
      }}
      style={{
        borderRadius,
        rotate,
        right,
        left,
        bottom,
        opacity,
        backgroundColor,
      }}
    >
      <ArrowUp />
    </motion.button>
  );
}
