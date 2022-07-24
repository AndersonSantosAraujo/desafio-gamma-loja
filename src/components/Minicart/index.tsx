import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Minicart.module.scss";
import { MinicartContext } from "./MinicartContext";
import ProductItem from "./ProductItem";

interface Props {
  show: boolean;
  showMinicart: any;
}

const Minicart = ({ show, showMinicart }: Props) => {
  const minicartCX = React.useContext(MinicartContext);

  return (
    <div
      className={classNames(styles["minicart"], {
        [styles["active"]]: show,
      })}
    >
      <ul className={styles["minicart__list"]}>
        {/* {minicart.items && console.log("🚀", minicart.items)} */}
        {minicartCX.items.map((item: any) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </ul>
      <div className={styles["minicart__footer"]}>
        <span className={styles["minicart__footer--total"]}>
          Total: $ {minicartCX.total}
        </span>
        {minicartCX.items.length > 0 ? (
          <Link to="/checkout" className={styles["minicart__footer--btn"]}>
            Finalizar Compra
          </Link>
        ) : (
          <button
            className={styles["minicart__footer--btn"]}
            onClick={() => showMinicart()}
          >
            To Shop
          </button>
        )}
      </div>
    </div>
  );
};

export default Minicart;
