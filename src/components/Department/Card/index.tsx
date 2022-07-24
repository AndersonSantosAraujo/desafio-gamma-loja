import { MinicartContext } from "components/Minicart/MinicartContext";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Chart from "./Chart";
import { ArrowUDownLeft } from "phosphor-react";
import classNames from "classnames";

const Card = ({ url }: any) => {
  const [pokemon, setPokemon] = React.useState<any>({});
  const [dataChart, setDataChart] = React.useState<any>();
  const [turn, setTurn] = React.useState(false);
  const minicartCX = React.useContext(MinicartContext);

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log("🚀", data);
        setDataChart(data.stats);
        setPokemon({
          id: data.id,
          image: data.sprites.other["official-artwork"].front_default,
          name: data.name,
          price: data.base_experience,
          stats: data.stats,
          types: data.types,
          quantity: 1,
        });
      });
  }, []);

  return (
    <>
      <div className={styles["card-container"]}>
        <Link
          to={`/${pokemon.name}`}
          className={styles["card-container__link"]}
        >
          <div
            className={classNames(styles["card"], {
              [styles["turned"]]: turn,
            })}
          >
            <div className={styles["card-front"]}>
              <div className={styles["card-front__flags"]}>
                {pokemon.types &&
                  pokemon.types.map(({ type }: any) => (
                    <span
                      className={`${styles["flag"]}  ${styles[type.name]}`}
                      key={type.name}
                    >
                      {type.name}
                    </span>
                  ))}
              </div>

              <LazyLoadImage
                src={
                  pokemon.image
                    ? pokemon.image
                    : "https://via.placeholder.com/250x250.png?text=Image+Not+Found"
                }
                alt={`Imagem de ${pokemon.name}`}
                height={250}
                width={250}
                effect="blur"
              />

              <h1 className={styles["card-front__title"]}>{pokemon.name}</h1>
              <p className={styles["card-front__price--old"]}>
                was $ {(pokemon.price * 1.05).toFixed(2)}
              </p>
              <p className={styles["card-front__price"]}>
                $ {pokemon.price}.00
              </p>
            </div>
            <div className={styles["card-back"]}>
              {dataChart && <Chart dataChart={dataChart} />}
            </div>
          </div>
        </Link>

        <div className={styles["card-container__nav"]}>
          <button
            onClick={() => minicartCX.addToCart(pokemon)}
            className={styles["card-container__nav--button"]}
          >
            Add to Cart
          </button>

          <button
            className={styles["card-container__nav--turn"]}
            onClick={() => setTurn(!turn)}
          >
            <ArrowUDownLeft size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
