import {
  images,
  tourGallery,
  factsGallery,
  tourConditions,
} from "../../utils/helpers";
import MotionCover from "../../components/motion-cover/MotionCover";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import TourCard from "../../components/tour-card/TourCard";
import Form from "../../components/form/Form";
import Intro from "../../components/intro/Intro";

import ButtonScroll from "../../components/ui/button-scroll/ButtonScroll";
import MotionFooter from "../../components/motion-footer/MotionFooter";

export default function Home() {
  const scrollDown = () => {
    window.scrollBy({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className={styles.main}>
      <MotionCover image={require("../../assets/images/logo.png")} />
      <Intro
        images={images}
        text="Туры по зимней"
        textLarge="Якутии"
        onClick={scrollDown}
      />
      <motion.p
        className={styles.facts}
        initial={{ x: "-50vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Знаете ли Вы, что можно запускать салюты из кипятка? Что бананами можно
        забивать гвозди? Что человек-невидимка существует? В Якутии Вас ждут эти
        и многие другие увлекательные открытия и эксперименты!
      </motion.p>
      <section className={styles.facts__gallery}>
        {factsGallery.map((image, i: number) => {
          return (
            <motion.img
              src={image}
              alt="Картинки из Якутии"
              key={image}
              className={styles.facts__image}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.3 }}
            />
          );
        })}
      </section>
      <motion.h3
        className={styles.tours}
        initial={{ x: "-50vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Наши туры
      </motion.h3>
      <section className={styles.tours__gallery}>
        {tourGallery.map((tour: any, i: number) => {
          return <TourCard tour={tour} index={i} />;
        })}
      </section>
      <div className={styles.form}>
        <motion.div
          initial={{ x: "-50vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.condition__wrapper}
        >
          <h4 className={styles.condition}>В стоимость туров включено:</h4>
          <ul className={styles.list}>
            {tourConditions.included.map((condition, i: number) => {
              return (
                <li key={i} className={styles.list__item}>
                  <span className={styles.list__marker_included}></span>
                  <p className={styles.list__text}> {condition}</p>
                </li>
              );
            })}
          </ul>
          <h4 className={styles.condition}>Оплачитается отдельно:</h4>
          <ul className={styles.list}>
            {tourConditions.excluded.map((condition, i: number) => {
              return (
                <li key={i} className={styles.list__item}>
                  <span className={styles.list__marker_excluded}></span>
                  <p  className={styles.list__text}> {condition}</p>
                </li>
              );
            })}
          </ul>
        </motion.div>

        <div style={{ width: "70%" }}>
          <Form text="Форма обратной связи" />
        </div>
      </div>
      {/* <ButtonScroll
        onClick={backToTop}
        borderRadius="50%"
        rotate="180deg"
        right="20px"
        opacity={0.8}
      /> */}
      <MotionFooter />
    </main>
  );
}
