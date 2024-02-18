import { images } from "../../utils/helpers";
import MotionCover from "../../components/motion-cover/MotionCover";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import Form from "../../components/form/Form";
import Intro from "../../components/intro/Intro";
import { useEffect, useRef, useState } from "react";
import useDebounce from "../../hooks/use-debounce";
import { useSwipeable } from "react-swipeable";
import useMediaQuery from "../../hooks/use-media-query";

export default function About() {
  const mobile = useMediaQuery("(max-width: 576px)");
  const tablet = useMediaQuery("(max-width: 768px)");
  const ref = useRef<HTMLDivElement | null>(null);
  const [translateY, setTranslateY] = useState(0);
  const [vh, setVh] = useState(window.innerHeight);

  const scrollHandler = (e: any) => {
    if (e.deltaY > 0) {
      setTranslateY((prev) => {
        if (prev === -(100 * 2)) {
          return -(100 * 2);
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
        if (prev === -(100 * 3)) {
          return -(100 * 3);
        } else {
          return prev - 100;
        }
      });
    },
  });

  const onResize = () => {
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: "smooth",
    // });
    // setVh(window.innerHeight);
    // setTranslateY(0);
  };

  useEffect(() => {
    const scrollContainer = ref.current;
    const onWheel = (e: any) => {
      e.preventDefault();
      debouncedSearch(e);
    };
    scrollContainer &&
      scrollContainer.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", onResize);
    return () => {
      scrollContainer && scrollContainer.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
    };
  }, [debouncedSearch]);

  const onClick = () => {
    setTranslateY(-vh);
  };

  return (
    <motion.main
      className={styles.main}
      {...handlers}
      // style={{ height: `${vh}px` }}
    >
      <MotionCover image={require("../../assets/images/logo.png")} />
      <motion.div
        ref={ref}
        animate={{
          transform: `translateY(${translateY}vh)`,
        }}
        transition={{ duration: 1 }}
      >
        <Intro images={images} text="О нас" onClick={onClick} />
        <section className={styles.section}
        //  style={{ height: `${vh}px` }}
         >
          <motion.span
            className={styles.imageSun}
            initial={{
              top: mobile ? "1%" : "4%",
              right: "-15vw",
              opacity: 0,
            }}
            whileInView={{
              right: mobile ? 0 : "12vw",
              opacity: 1,
              transition: { duration: 2, delay: 0 },
            }}
          ></motion.span>
          <div className={styles.content}>
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
            className={styles.motionImage}
            initial={{
              bottom: mobile ? "-11%" : "1%",
              right: 0,
              left: 0,
              opacity: 0,
            }}
            whileInView={{
              bottom: "5%",
              // right: 0,
              // left: 0,
              opacity: 1,
              transition: { duration: 1 },
            }}
          >
            <img
              className={styles.imageBottomCenter}
              src={require("../../assets/images/chumBlack.png")}
              alt="рисунок"
            />
          </motion.div>
        </section>

        <section className={styles.section} 
        // style={{ height: `${vh}px` }}
        >
          <motion.span
            className={styles.imageSun}
            initial={{
              top: "1%",
              right: "-15vw",
              opacity: 0,
            }}
            whileInView={{
              // top: "1%",
              right: mobile ? 0 : "12vw",
              opacity: 1,
              transition: { duration: 3, delay: 0 },
            }}
          ></motion.span>
          <div className={`${styles.content} ${styles.content_last}`}>
            <p className={styles.text}>
              По запросу организовываем любые туры, путешествия и экспедиции по
              Якутии, а также познавательные экскурсии по Якутску и другим
              населенным пунктам. В штате компании работают опытные
              профессиональные инструкторы-проводники, имеющие допуск работы с
              группами туристов на маршрутах до 5-й категории сложности.
            </p>
            <p className={styles.text}>Ждем Ваших пожеланий.</p>
            <div className={styles.form}>
              {!tablet && <Form text="Форма обратной связи" />}
            </div>
          </div>
          <motion.div
            className={styles.motionImage}
            initial={{
              top: "5%",
              right: "-15%",
              opacity: mobile ? 1 : 0,
            }}
            whileInView={{
              // top: "5%",
              right: 0,
              opacity: 1,
              transition: { duration: 1.5 },
            }}
          >
            <img
              src={require("../../assets/images/family.png")}
              alt="рисунок"
              className={styles.imgTopRight}
            />
          </motion.div>
          <motion.div
            className={styles.motionImage}
            initial={{
              bottom: "5%",
              left: "-5%",
            }}
            whileInView={{
              // bottom: "5%",
              left: "2%",
              transition: { duration: 1.5 },
            }}
          >
            <img
              src={require("../../assets/images/deerblue.png")}
              alt="рисунок"
              className={styles.imageBottomDeer}
            />
          </motion.div>
          <motion.div
            className={styles.motionImage}
            initial={{
              bottom: "5%",
              left: "-10%",
              opacity: 0,
            }}
            whileInView={{
              // bottom: "5%",
              // left: "-10%",
              opacity: 1,
              transition: { duration: 1.5 },
            }}
          >
            <img
              src={require("../../assets/images/tree.png")}
              alt="рисунок"
              className={styles.imageBottomTree}
            />
          </motion.div>
        </section>
        {mobile && (
          <section
            className={styles.section}
            style={{
              backgroundColor: "white",
              paddingTop: "70px",
              // height: `${vh}px`,
            }}
          >
            <motion.span
              className={styles.imageSun}
              initial={{
                top: "1%",
                right: "-15vw",
                opacity: 0,
              }}
              whileInView={{
                // top: "1%",
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
