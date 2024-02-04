import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import trees from "../../assets/images/treesbackground.png";
import styles from "./MotionFooter.module.css";
import ButtonScroll from "../ui/button-scroll/ButtonScroll";

const motionTrees = [trees, trees];

export default function MotionFooter() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 1,
    cssEase: "linear",
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.slider}>
      <motion.div className={styles.slider__image}></motion.div>
      <Slider {...settings}>
        {motionTrees.map(() => {
          return <div className={styles.slider__background}></div>;
        })}
      </Slider>
      <ButtonScroll
        onClick={backToTop}
        borderRadius="50%"
        rotate="180deg"
        right="20px"
        opacity={0.8}
      />
    </div>
  );
}
