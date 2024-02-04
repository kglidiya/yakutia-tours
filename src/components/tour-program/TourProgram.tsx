import React from "react";
import styles from "./TourProgram.module.css";
import { motion } from "framer-motion";
import Devider from "../ui/icons/devider/Devider";

export default function TourProgram({ tour }: { tour: string[] }) {
  return (
    <ul className={styles.list}>
      {tour.map((day, i: number) => {
        return (
          <motion.li key={i} className={styles.list__item}>
            <div className={styles.list__text}>
              {tour.length > 1 && (
                <motion.p
                  className={styles.day}
                  initial={{ x: "-150px" }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                >{`День ${i + 1}`}</motion.p>
              )}

              <motion.p
                className={styles.activities}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {day}
              </motion.p>
            </div>
            <Devider />
          </motion.li>
        );
      })}
    </ul>
  );
}
