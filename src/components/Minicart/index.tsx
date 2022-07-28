import classNames from "classnames";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Minicart.module.scss";
import { MinicartContext } from "./MinicartContext";
import ProductItem from "./ProductItem";

interface IMinicart {
  show: boolean;
  showMinicart: any;
}

interface IMinicartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: { name: string; url: string };
    },
  ];
  types: [{ slot: number; type: { name: string; url: string } }];
}

const Minicart = ({ show, showMinicart }: IMinicart) => {
  const minicartCX = useContext(MinicartContext);

  return (
    <div
      className={classNames(styles["minicart"], {
        [styles["active"]]: show,
      })}
    >
      <ul className={styles["minicart__list"]}>
        {minicartCX.items.map((item: IMinicartItem) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </ul>
      <div className={styles["minicart__footer"]}>
        <span className={styles["minicart__footer--total"]}>
          Total: $ {minicartCX.total}
        </span>
        {minicartCX.items.length > 0 ? (
          <Link to="/checkout" className={styles["minicart__footer--btn"]}>
            To Checkout
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
