import React, { useState } from 'react'
import styles from './Footer.module.css'
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
export default function Footer() {
    const { scrollY } = useScroll()
   const [ width, setWidth] = useState(-10)
    useMotionValueEvent(scrollY, "change", (latest) => {
        // console.log("Page scroll: ", latest)
        // console.log(document.documentElement.scrollHeight)
        setWidth(latest*100/(document.documentElement.scrollHeight-800))
      })
// console.log(width)
  return (
    <motion.div 
    // style={{ width: `${width}%` }} 
    style={{ right: `${width}%` }} 
    // style={{ scaleX: scrollYProgress }}
    // initial={{x:0}}
    // animate={{x: `${scrollYProgress}px`}}
    className={styles.footer}></motion.div>
    
  )
}
