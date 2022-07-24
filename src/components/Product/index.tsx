import Header from "components/Header";
import React from "react";
import styles from "./Product.module.scss";
import { useParams } from "react-router-dom";
import Footer from "components/Footer";
import ProductImage from "./ProductImage";
import ProductData from "./ProductData";
import Shelf from "./Shelf";

const Product = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = React.useState<any>({});

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log("🚀", data);

        fetch(`https://pokeapi.co/api/v2/ability/${data.id}`)
          .then((responseT) => responseT.json())
          .then((dataT) => {
            const description = dataT.effect_entries.filter(
              ({ language }: any) => {
                return language.name === "en";
              },
            );

            setPokemon({
              id: data.id,
              images: data.sprites.other.home,
              name: data.name,
              price: data.base_experience,
              stats: data.stats,
              types: data.types,
              quantity: 1,
              desc: description[0].effect,
            });
          });
      });
  }, []);

  return (
    <>
      <Header />
      <main className={`container`}>
        <div className={styles["product"]}>
          <ProductImage images={pokemon.images} />
          <ProductData desc={pokemon.desc} />
        </div>
        <Shelf />
      </main>
      <Footer />
    </>
  );
};

export default Product;
