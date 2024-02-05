import React, { useState } from "react";
import styles from "./TourProgram.module.css";
import { motion } from "framer-motion";
import Devider from "../ui/icons/devider/Devider";
import useMediaQuery from "../../hooks/use-media-query";

export default function TourProgram({ tour }: { tour: string[] }) {
  const mobile = useMediaQuery("(max-width: 576px)");
  const [hidden, setHidden] = useState(true);

  const toggle = () => {
    setHidden(!hidden);
  };
  console.log(hidden);
  return (
    <ul className={styles.list}>
      {tour.map((day, i: number) => {
        return (
          <motion.li key={i} className={styles.list__item}>
            <div className={styles.list__text}>
              {tour.length > 1 && (
                <motion.p
                  className={styles.day}
                  initial={{ x: mobile ? "-50px" : "-150px" }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                >{`День ${i + 1}`}</motion.p>
              )}
              <div style={{ width: "60%" }}>
                <motion.p
                  style={{ height: hidden ? "210px" : "auto" }}
                  className={styles.activities}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  {day}
                </motion.p>
                {mobile && (
                  <p className={styles.button} onClick={toggle}>
                    {hidden ? "Далее..." : "Скрыть"}
                  </p>
                )}
              </div>
            </div>
            <Devider />
          </motion.li>
        );
      })}
    </ul>
  );
}
