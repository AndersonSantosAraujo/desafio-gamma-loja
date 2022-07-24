import styles from "./SlickArrow.module.scss";

const SlickPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles["btn-slick"]}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default SlickPrevArrow;
