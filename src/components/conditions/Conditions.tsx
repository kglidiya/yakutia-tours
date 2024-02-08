import {
    images,
    tourGallery,
    factsGallery,
    tourConditions,
  } from "../../utils/helpers";
  import MotionCover from "../../components/motion-cover/MotionCover";
  import styles from "./Conditions.module.css";
  import { motion } from "framer-motion";
  import TourCard from "../../components/tour-card/TourCard";
  import Form from "../../components/form/Form";
  import Intro from "../../components/intro/Intro";
  
  import ButtonScroll from "../../components/ui/button-scroll/ButtonScroll";
  import MotionFooter from "../../components/motion-footer/MotionFooter";
  

export default function Conditions() {
  return (
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


      <Form text="Форма обратной связи" />

  </div>
  )
}
