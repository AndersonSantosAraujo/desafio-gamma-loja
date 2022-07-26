import Slider from "react-slick";
import styles from "./ProductImage.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickPrevArrow from "components/Slick/SlickArrow";

interface IImage {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

const ProductImage = ({ images }: { images: IImage }) => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <SlickPrevArrow />,
    prevArrow: <SlickPrevArrow />,
  };

  return (
    <div className={styles["productImage"]}>
      <Slider className={styles["slickSlider"]} {...settings}>
        <div className={styles["itemImg"]}>
          <img src="https://via.placeholder.com/512x512.png?text=Image+1" />
        </div>
        <div className={styles["itemImg"]}>
          <img src="https://via.placeholder.com/512x512.png?text=Image+2" />
        </div>
        <div className={styles["itemImg"]}>
          <img src="https://via.placeholder.com/512x512.png?text=Image+3" />
        </div>
        <div className={styles["itemImg"]}>
          <img src="https://via.placeholder.com/512x512.png?text=Image+4" />
        </div>
      </Slider>
    </div>
  );
};

export default ProductImage;
