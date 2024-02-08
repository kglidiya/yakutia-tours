import { Twirl as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import WhatsUpIcon from "../ui/icons/whatsup-icon/WhatsUpIcon";
import { Link, NavLink } from "react-router-dom";
import EmailIcon from "../ui/icons/email-icon/EmailIcon";
import styles from "./NavMobile.module.css";
import { motion } from "framer-motion";

export default function NavMobile() {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav style={{ position: "relative" }}>
      <span className={styles.icon}>
        <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
      </span>

      <motion.ul
        className={styles.links}
        // initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
        // exit={{ scale: 0, opacity: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 0.5 }}
      >
        <li  onClick={() => setOpen(false)}>
          <NavLink
            // onClick={() => setOpen(false)}
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.link_active}`
                : `${styles.link} ${styles.link_default}`
            }
          >
            О нас
          </NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink
            to="/tours"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.link_active}`
                : `${styles.link} ${styles.link_default}`
            }
          >
            Туры
          </NavLink>
        </li>
        <li>
          <Link
            to="tel:9876543210"
            className={`${styles.link} ${styles.link_default}`}
          >
            {" "}
            <WhatsUpIcon />
            +7 (915) 678-24-34
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="mailto:"
            className={`${styles.link} ${styles.link_default}`}
          >
            <EmailIcon />
            beryff@yandex.ruLink
          </Link>
        </li>
      </motion.ul>
    </nav>
  );
}
