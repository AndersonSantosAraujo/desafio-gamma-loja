import Card from "components/Department/Card";
import React from "react";
import Slider from "react-slick";
import styles from "./Shelf.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Shelf = () => {
  const settings = {
    autoplay: true,
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className={styles["shelf"]}>
      <h1 className={styles["shelf__title"]}>Buy Together...</h1>
      <Slider className={styles["shelf__images"]} {...settings}>
        <Card url="https://pokeapi.co/api/v2/pokemon/1/" />
        <Card url="https://pokeapi.co/api/v2/pokemon/2/" />
        <Card url="https://pokeapi.co/api/v2/pokemon/3/" />
        <Card url="https://pokeapi.co/api/v2/pokemon/4/" />
        <Card url="https://pokeapi.co/api/v2/pokemon/5/" />
      </Slider>
    </div>
  );
};

export default Shelf;
