import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Intro.module.css";
import ButtonScrollBotton from "../ui/button-scroll/ButtonScroll";
interface IIntroProps {
  images: string[];
  text?: string;
  textLarge?: string;
  onClick: VoidFunction
}
export default function Intro({ images, text, textLarge, onClick }: IIntroProps) {
  const [image, setImages] = useState(images[0]);

  useEffect(() => {
    let timer: any;
    timer = setInterval(function () {
      images.push(images.shift() as string);
      setImages(images[0]);
    }, 5000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <section className={styles.wrapper}>
      <motion.img
        key={image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={image}
        alt="Картинки из Якутии"
        className={styles.image}
      ></motion.img>
      <motion.h1
        initial={{ left: "-50%" }}
        animate={{ left: "50%" }}
        transition={{ duration: 1, delay: 1 }}
        className={styles.title}
      >
        {text} <br /> <span className={styles.title_large}>{textLarge}</span>
      </motion.h1>
      <ButtonScrollBotton onClick={onClick} borderRadius="10px" rotate="0deg"  opacity={0.6}/>
    </section>
  );
}
