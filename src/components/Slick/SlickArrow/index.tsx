import styles from "./SlickArrow.module.scss";

interface ISlick {
  className?: string;
  currentSlide?: number;
  dataRole?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  slideCount?: number;
  style?: { display?: string };
}

const SlickPrevArrow = (props: ISlick) => {
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
