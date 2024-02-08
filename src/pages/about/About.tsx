import { images, tourGallery, factsGallery } from "../../utils/helpers";
import MotionCover from "../../components/motion-cover/MotionCover";
import styles from "./About.module.css";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import TourCard from "../../components/tour-card/TourCard";
import Form from "../../components/form/Form";
import Intro from "../../components/intro/Intro";
import { SetStateAction, useEffect, useRef, useState } from "react";
import useDebounce from "../../hooks/use-debounce";
import Chum from "../../components/ui/icons/chum/Chum";
import { useSwipeable } from "react-swipeable";
import useMediaQuery from "../../hooks/use-media-query";
import MotionFooter from "../../components/motion-footer/MotionFooter";

export default function About() {
  const mobile = useMediaQuery("(max-width: 576px)");
  const tablet = useMediaQuery("(max-width: 768px)");
  const ref = useRef<HTMLDivElement | null>(null);
  const [translateY, setTranslateY] = useState(0);

  const scrollHandler = (e: any) => {
    if (e.deltaY > 0) {
      setTranslateY((prev) => {
        if (prev === -200) {
          return -200;
        } else {
          return prev - 100;
        }
      });
    }
    if (e.deltaY < 0) {
      setTranslateY((prev) => {
        if (prev === 0) {
          return 0;
        } else {
          return prev + 100;
        }
      });
    }
  };

  const debouncedSearch = useDebounce(scrollHandler, 300);

  const handlers = useSwipeable({
    onSwipedDown: () => {
      setTranslateY((prev) => {
        if (prev === 0) {
          return 0;
        } else {
          return prev + 100;
        }
      });
    },
    onSwipedUp: () => {
      setTranslateY((prev) => {
        if (prev === -300) {
          return -300;
        } else {
          return prev - 100;
        }
      });
    },
  });

  useEffect(() => {
    const scrollContainer = ref.current;
    const onWheel = (e: any) => {
      e.preventDefault();
      debouncedSearch(e);
    };
    scrollContainer && scrollContainer.addEventListener("wheel", onWheel);
    scrollContainer && scrollContainer.addEventListener("touchmove", onWheel);
    return () => {
      scrollContainer && scrollContainer.removeEventListener("wheel", onWheel);
    };
  }, [debouncedSearch]);

  const onClick = () => {
    setTranslateY(-100);
  };

  return (
    <motion.main className={styles.main} {...handlers}>
      <MotionCover image={require("../../assets/images/logo.png")} />
      <motion.div
        ref={ref}
        animate={{
          transform: `translateY(${translateY}vh)`,
        }}
        transition={{ duration: 1 }}
      >
        <Intro images={images} text="О нас" onClick={onClick} />
        <section className={styles.section}>
          <motion.span
            className={styles.sun}
            initial={{
              top: "4%",
              right: "-15vw",
              opacity: 0,
            }}
            whileInView={{
              top: "4%",
              right: "12vw",
              opacity: 1,
              transition: { duration: 2, delay: 0 },
            }}
          ></motion.span>
          <div className={styles.wrapper}>
            <p className={styles.text}>
              Якутия — самый большой и самый холодный регион России. Именно
              здесь находится полюс холода Северного полушария — район земли с
              самой низкой зарегистрированной температурой, где постоянно
              проживают люди.{" "}
            </p>
            <p className={styles.text}>
              Наша компания специализируется на турах по зимней Якутии. Наше
              кредо - это ОБЕСПЕЧЕНИЕ НАДЕЖНОСТИ И КАЧЕСТВА на маршрутах. Для
              этого мы постоянно совершенствуем наши маршруты и работаем над
              повышением уровня обслуживания туристов. Компания оснащена
              надежным тур.снаряжением, которая не подведет в любых условиях и
              обеспечит максимальный комфорт.
            </p>
          </div>
          <motion.div
            className={styles.chum}
            initial={{
              bottom: mobile ? 0 : "-22%",
              right: 0,
              left: 0,
              opacity: 0,
            }}
            whileInView={{
              bottom: mobile ? "4%" : 0,
              right: 0,
              left: 0,
              opacity: translateY === -100 ? 1 : 0,
              transition: { duration: 1 },
            }}
          >
            <img
              className={styles.image}
              src={require("../../assets/images/chumsblack.png")}
              alt=""
            />
          </motion.div>
        </section>

        <section className={styles.section} >
          <motion.span
            className={styles.sun}
            initial={{
              top: "1%",
              right: "-15vw",
              opacity: 0,
            }}
            whileInView={{
              top: "1%",
              right: "12vw",
              opacity: 1,
              transition: { duration: 3, delay: 0 },
            }}
          ></motion.span>
          <div className={`${styles.wrapper} ${styles.wrapper_last}`}>
            <p className={styles.text}>
              По запросу организовываем любые туры, путешествия и экспедиции по
              Якутии, а также познавательные экскурсии по Якутску и другим
              населенным пунктам. В штате компании работают опытные
              профессиональные инструкторы-проводники, имеющие допуск работы с
              группами туристов на маршрутах до 5-й категории сложности.
            </p>
            <p className={styles.text}>Ждем Ваших пожеланий.</p>
            <div className={styles.form} >
              {!tablet && <Form text="Форма обратной связи" />}
            </div>
          </div>
          <motion.div
            className={styles.chum}
            initial={{
              top: "5%",
              right: "-10%",
              opacity: 0,
            }}
            whileInView={{
              top: "5%",
              right: 0,
              opacity: 1,
              transition: { duration: 1.5 },
            }}
          >
            <img
              src={require("../../assets/images/family.png")}
              alt=""
              className={styles.imgTopRight}
            />
          </motion.div>
          <motion.div
            className={styles.chum}
            initial={{
              bottom: "5%",
              left: "-5%",
              // opacity: 0,
            }}
            whileInView={{
              bottom: "5%",
              left: "2%",
              // opacity: 1,
              transition: { duration: 1.5 },
            }}
          >
            <img
              src={require("../../assets/images/deerblue.png")}
              alt=""
              className={styles.imageBottomDeer}
            />
          </motion.div>
          <motion.div
            className={styles.chum}
            initial={{
              bottom: "5%",
              left: "-10%",
              opacity: 0,
            }}
            whileInView={{
              bottom: "5%",
              left: "-10%",
              opacity: 1,
              transition: { duration: 1.5 },
            }}
          >
            <img
              src={require("../../assets/images/tree.png")}
              alt=""
              className={styles.imageBottomTree}
            />
          </motion.div>
        </section>
        {mobile && (
          <section className={styles.section} style={{backgroundColor: 'white', paddingTop: '40px'}}>
            <motion.span
            className={styles.sun}
            initial={{
              top: "1%",
              right: "-15vw",
              opacity: 0,
            }}
            whileInView={{
              top: "1%",
              right: 0,
              opacity: 1,
              transition: { duration: 3, delay: 0 },
            }}
          ></motion.span>
            <Form text="Форма обратной связи" />
          </section>
        )}
      </motion.div>
    </motion.main>
  );
}
