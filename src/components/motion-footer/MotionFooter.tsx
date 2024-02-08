import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import trees from "../../assets/images/treesbackground.png";
import styles from "./MotionFooter.module.css";
import ButtonScroll from "../ui/button-scroll/ButtonScroll";
import img1 from '../../assets/images/2222_pixian_ai.png';
import img2 from '../../assets/images/55555.png';
import img3 from '../../assets/images/44444_pixian_ai.png';
const motionTrees = [trees, trees];
interface IMotionFooter {
  type: string;
}

export default function MotionFooter({ type }: IMotionFooter) {
  const style = {
    option_1: {
      background: `url(${img1}) top center / contain no-repeat`,

    },
    option_2: {
      background:
      `url(${img2}) top center / contain no-repeat, url(${img3}) 50% / contain no-repeat`,

      },
    
  };
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
      <motion.div
        className={styles.slider__image}
        style={type === "option_1" ? style.option_1 : style.option_2}
      ></motion.div>
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
