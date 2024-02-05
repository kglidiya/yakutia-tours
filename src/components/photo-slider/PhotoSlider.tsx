import React from 'react'
import ButtonScroll from '../ui/button-scroll/ButtonScroll';
import Title from '../title/Title';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { ITour } from '../../utils/types';
import styles from './PhotoSlider.module.css'

export default function PhotoSlider({ images }: { images: string[] }) {
    const settingsGallery = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        nextArrow: (
          <ButtonScroll
            borderRadius="10px"
            rotate="-90deg"
            bottom="45%"
            right="2%"
            opacity={0.7}
          />
        ),
        prevArrow: (
          <ButtonScroll
            borderRadius="10px"
            rotate="90deg"
            bottom="45%"
            left="2%"
            opacity={0.7}
          />
        ),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
     <Title text="  Фотогалерея" />
            <motion.div
              className={styles.gallery}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Slider {...settingsGallery}>
                {images.map((image) => {
                  return (
                    <motion.img
                      src={image}
                      alt="Фотографии с тура"
                      className={styles.gallery__image}
                    />
                  );
                })}
              </Slider>
            </motion.div>
    </>
  )
}