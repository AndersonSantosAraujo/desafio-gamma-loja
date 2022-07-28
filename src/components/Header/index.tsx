import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import styles from "./Header.module.scss";
import { ShoppingCart, UserCircle } from "phosphor-react";
import { MinicartContext } from "components/Minicart/MinicartContext";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Minicart from "components/Minicart";
import Search from "./Search";

const Header = () => {
  const minicartCX = React.useContext(MinicartContext);

  return (
    <>
      <header className={styles["header"]}>
        <nav className={`container ${styles["header__navigation"]}`}>
          <Link to="/">
            <Logo />
          </Link>

          <Search />

          <div className={styles["header-buttons"]}>
            <button className={styles["header-buttons__user"]}>
              <UserCircle size={32} color="#fff" />
            </button>

            <button
              className={styles["header-buttons__minicart"]}
              onClick={() => minicartCX.showMinicart()}
            >
              <ShoppingCart size={32} color="#fff" />
              <span
                className={classNames(styles["minicart-badge"], {
                  [styles["hidden"]]: minicartCX.items.length === 0,
                })}
              >
                {minicartCX.items.length}
              </span>
            </button>
          </div>

          <Minicart
            show={minicartCX.show}
            showMinicart={minicartCX.showMinicart}
          />
        </nav>
        <div
          className={classNames(styles["backdrop"], {
            [styles["backdropShow"]]: minicartCX.show,
          })}
        ></div>
      </header>
    </>
  );
};

export default Header;
