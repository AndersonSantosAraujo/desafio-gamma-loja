import React from "react";
import Slider from "react-slick";
import styles from "./Filter.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Filter = ({ setType, setOffset, numberitems }: any) => {
  const [typeFilter, setTypeFilter] = React.useState([]);

  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    centerMode: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 560,
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

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/?limit=1499`)
      .then((response) => response.json())
      .then(({ results }) => {
        setTypeFilter(results);
      });
  }, []);

  function handleType(e: any) {
    setOffset(numberitems);
    setType([e.target.value]);
  }

  return (
    <div className={styles["filter"]}>
      <div className={styles["filter__box"]}>
        <Slider {...settings}>
          {typeFilter &&
            typeFilter.map(({ name, url }: any) => (
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
