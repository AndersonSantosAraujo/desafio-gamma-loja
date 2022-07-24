import React from "react";
import { MinicartContext } from "../MinicartContext";
import styles from "./ProductItem.module.scss";

interface Props {
  id: number;
  image: string;
  name: string;
  price: number;
}

const ProductItem = ({ id, image, name, price }: Props) => {
  const minicartCX = React.useContext(MinicartContext);

  return (
    <li className={styles["productItem"]}>
      <div className={styles["productItem__image"]}>
        <img src={image} alt={`Imagem de ${name}`} />
      </div>
      <div className={styles["productItem__data"]}>
        <p className={styles["productItem__data--name"]}>{name}</p>
        <p className={styles["productItem__data--price"]}>R$ {price}</p>
      </div>
      <button
        className={styles["productItem__remove"]}
        onClick={() => minicartCX.removeToCart(id)}
      >
        X
      </button>
    </li>
  );
};

export default ProductItem;
