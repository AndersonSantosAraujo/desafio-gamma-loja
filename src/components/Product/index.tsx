import Header from "components/Header";
import React from "react";
import styles from "./Product.module.scss";
import { useParams } from "react-router-dom";
import Footer from "components/Footer";
import ProductImage from "./ProductImage";
import ProductData from "./ProductData";
import Shelf from "./Shelf";

interface IPokemon {
  id: number;
  images: {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  name: string;
  price: number;
  quantity: number;
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: { name: string; url: string };
    },
  ];
  types: [{ slot: number; type: { name: string; url: string } }];
  desc: string;
}

interface ILanguage {
  name: string;
  url: string;
}

const Product = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = React.useState<IPokemon | undefined>();

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        fetch(`https://pokeapi.co/api/v2/ability/${data.id}`)
          .then((responseT) => responseT.json())
          .then((dataT) => {
            const description = dataT.effect_entries.filter(
              ({ language }: { language: ILanguage }) => {
                return language.name === "en";
              },
            );

            setPokemon({
              id: data.id,
              images: data.sprites.other.home,
              name: data.name,
              price: data.base_experience,
              quantity: 1,
              stats: data.stats,
              types: data.types,
              desc: description[0].effect,
            });
          });
      });
  }, []);

  if (pokemon)
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
  else return null;
};

export default Product;
