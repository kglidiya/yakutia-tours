import styles from "./Button.module.css";
import { motion, useScroll, useSpring } from "framer-motion";
import image from '../../../assets/images/background.jpg'
import { ReactNode } from "react";
interface IButton {
  text: string | ReactNode;
  width?: string;
  fontSize: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}
export default function Button({
  text,
  width,
  fontSize,
  onClick,
  disabled,
  type = "button",
}: IButton) {
  return (
    // eslint-disable-next-line react/button-has-type
    <motion.button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={styles.button}
      style={{ width, fontSize}}
      onClick={onClick}
      disabled={disabled}
      whileTap={{
        scale: 0.9,
        backgroundImage:
          `url(${image})`,
        backgroundSize: "500%",
	    
      }}

    >
      {text}
    </motion.button>
  );
}
