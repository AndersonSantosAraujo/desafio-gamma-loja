import Card from "components/Department/Card";
import React from "react";
import Slider from "react-slick";
import styles from "./Shelf.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickPrevArrow from "components/Slick/SlickArrow";

const Shelf = () => {
  let [arr, setArr] = React.useState<any>([]);

  React.useEffect(() => {
    for (let i = 0; i < 10; i++) {
      setArr([...arr, Math.floor(1154 * Math.random() + 1)]);
    }
  }, []);

  const settings = {
    autoplay: true,
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SlickPrevArrow />,
    prevArrow: <SlickPrevArrow />,
  };

  return (
    <div className={styles["shelf"]}>
      <h1 className={styles["shelf__title"]}>Buy Together...</h1>
      <Slider className={styles["shelf__images"]} {...settings}>
        {arr.map(
          (num: number) => console.log("🚀", arr),
          // <Card key={num} url={`https://pokeapi.co/api/v2/pokemon/${num}/`} />
        )}
      </Slider>
    </div>
  );
};

export default Shelf;
