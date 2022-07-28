import styles from "./ProductData.module.scss";

const ProductData = ({ desc }: { desc: string }) => {
  return (
    <div className={styles["productData"]}>
      <h2>Descrição:</h2>
      <p>{desc}</p>
    </div>
  );
};

export default ProductData;
