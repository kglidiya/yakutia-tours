import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import WhatsUpIcon from "../ui/icons/whatsup-icon/WhatsUpIcon";
import EmailIcon from "../ui/icons/email-icon/EmailIcon";
import useMediaQuery from "../../hooks/use-media-query";
import NavMobile from "../nav-mobile/NavMobile";

export default function Header() {
  const navigate = useNavigate();
  const matches = useMediaQuery('(min-width: 768px)');
  return (
    <header className={styles.header}>

      <div className={styles.logo} onClick={()=> navigate('/')}>
        <img
          src={require("../../assets/images/logo.png")}
          alt="Логотип"
          className={styles.logo__image}
        />
        <span>
          <h2 className={styles.logo__title}>Вечная</h2>
          <h2 className={styles.logo__title}>мерзлота</h2>
        </span>
      </div>
      {matches &&   <nav className={styles.links}>
        <NavLink
          to="/about"
          className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.link_active}` : `${styles.link} ${styles.link_default}`
          }
        >
          О нас
        </NavLink>
        <NavLink
          to="/tours"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.link_active}` : `${styles.link} ${styles.link_default}`
          }
        >
          Туры
        </NavLink>

        <Link to="tel:9876543210" className={`${styles.link} ${styles.link_default}`}>
          {" "}
          <WhatsUpIcon />
          +7 (915) 678-24-34
        </Link>

        <Link to="mailto:" className={`${styles.link} ${styles.link_default}`}>
          <EmailIcon />
          beryff@yandex.ruLink
        </Link>
      </nav>}
    {!matches && <NavMobile/>}
    </header>
  );
}
