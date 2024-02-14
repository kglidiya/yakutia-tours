import { motion } from "framer-motion";
import styles from "./MotionCover.module.css";

export default function MotionCover({ image }: { image: string }) {
  return (
    <motion.section
      className={styles.wrapper}
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
