import { useEffect, useRef, useState } from "react";
import styles from "./Tour.module.css";
import { motion } from "framer-motion";
import { tourGallery } from "../../utils/helpers";
import ButtonScroll from "../../components/ui/button-scroll/ButtonScroll";
import Title from "../../components/title/Title";
import TourProgram from "../../components/tour-program/TourProgram";
import OrderForm from "../../components/order-form/OrderForm";
import { ITour } from "../../utils/types";
import Button from "../../components/ui/button/Button";
import MotionCover from "../../components/motion-cover/MotionCover";
import PhotoSlider from "../../components/photo-slider/PhotoSlider";
import MotionFooter from "../../components/motion-footer/MotionFooter";
import { useSwipeable } from "react-swipeable";
interface ITourProps {
  title: string;
  subtitle: string;
  tour: ITour;
}

export default function Tour({ tour }: { tour: ITour }) {
  const refContent = useRef<HTMLDivElement | null>(null);
  const refForm = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const scrollContainer = refContent.current;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        window.scrollTo({
          top: refContent.current?.clientHeight,
          left: 0,
          behavior: "smooth",
        });
      }
      if (e.deltaY < 0) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    };
    scrollContainer && scrollContainer.addEventListener("wheel", onWheel);

    return () => {
      scrollContainer && scrollContainer.removeEventListener("wheel", onWheel);
    };
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: refContent.current?.clientHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  const scrollToForm = () => {
    refForm.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  const style = {
    background: `linear-gradient(
    to bottom,
    transparent 65%,

    rgba(255, 255, 255, 1)
  ),
  url(${tour.image_intro})
    no-repeat`,
    'background-size': "cover",
  };

  return (
    <>
      <MotionCover image={require("../../assets/images/logo.png")} />
      <motion.div
        // className={`${styles.intro} ${styles.intro_oymyakon}`}
        className={styles.intro}
        style={style}
        ref={refContent}
        // {...handlers}
      >
        <motion.div
          initial={{ left: "-50%" }}
          animate={{ left: "50%" }}
          transition={{ duration: 1, delay: 1 }}
          className={styles.caption}
        >
          <h3 className={styles.title}>{tour.title_short}</h3>
          <p className={styles.subtitle}>{tour.subtitle}</p>
          <Button
            type="submit"
            text="Заказать"
            fontSize="18px"
            width="200px"
            onClick={scrollToForm}
          />
        </motion.div>
        <ButtonScroll
          onClick={scrollDown}
          borderRadius="10px"
          rotate="0deg"
          backgroundColor={"#d1e8ef"}
        />
      </motion.div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.description}>
            <PhotoSlider images={tour.gallery} />
            <Title text=" Программа тура" margin="100px auto 60px auto" />
            <TourProgram tour={tour.program} />
            <motion.div
              ref={refForm}
              className={styles.form__wrapper}
              initial={{ y: "30vh" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <OrderForm text="Оставить заявку" />
            </motion.div>
          </div>
        </div>
        <MotionFooter />
      </div>
    </>
  );
}
