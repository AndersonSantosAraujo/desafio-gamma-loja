import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={`container ${styles["footer__content"]}`}>
        <p>pokeshop © Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
