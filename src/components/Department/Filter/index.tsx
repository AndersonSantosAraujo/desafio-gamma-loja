import Slider from "react-slick";
import styles from "./Filter.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickPrevArrow from "components/Slick/SlickArrow";
import React, { Dispatch, useEffect, useState } from "react";

const Filter = ({
  setType,
  setOffset,
  numberitems,
}: {
  setType: Dispatch<any>;
  setOffset: Dispatch<number>;
  numberitems: number;
}) => {
  const [typeFilter, setTypeFilter] = useState([]);

  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    centerMode: true,
    initialSlide: 0,
    nextArrow: <SlickPrevArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/?limit=1499`)
      .then((response) => response.json())
      .then(({ results }) => {
        setTypeFilter(results);
      });
  }, []);

  function handleType(e: React.SyntheticEvent<EventTarget>) {
    setOffset(numberitems);
    setType((e.target as HTMLInputElement).value);
  }

  return (
    <div className={styles["filter"]}>
      <div className={styles["filter__box"]}>
        <Slider {...settings}>
          {typeFilter &&
            typeFilter.map(({ name, url }: { name: string; url: string }) => (
              <label className={styles[name]} key={name}>
                <input
                  type="radio"
                  id={name}
                  name="type"
                  value={url}
                  onClick={(e) => handleType(e)}
                />{" "}
                {name}
              </label>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Filter;
