import React from "react";
import styles from "./ProductData.module.scss";

const ProductData = ({ desc }: any) => {
  return (
    <div className={styles["productData"]}>
      <h2>Descrição:</h2>
      <p>{desc}</p>
    </div>
  );
};

export default ProductData;
