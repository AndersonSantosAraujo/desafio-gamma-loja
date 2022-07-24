import Header from "components/Header";
import React from "react";
import Card from "components/Department/Card";
import styles from "./Department.module.scss";
import Footer from "components/Footer";
import Filter from "./Filter";

const Department = () => {
  const numberItems = 12;
  const [pokemons, setPokemons] = React.useState<any>([]);
  const [offset, setOffset] = React.useState<number>(numberItems);
  const [type, setType] = React.useState([]);

  React.useEffect(() => {
    if (type.length === 0) {
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1499`)
        .then((response) => response.json())
        .then(({ results }) => {
          setPokemons(results.slice(0, offset));
        });
    } else {
      fetch(`${type}?limit=1499`)
        .then((response) => response.json())
        .then(({ pokemon }) => {
          const results = pokemon.map(({ pokemon }: any) => {
            return pokemon;
          });

          setPokemons(results.slice(0, offset));
        });
    }
  }, [offset, type]);

  return (
    <>
      <Header />
      <main className={`container ${styles["mainDepartment"]}`}>
        <Filter
          setType={setType}
          setOffset={setOffset}
          numberitems={numberItems}
        />

        <div className={styles["mainDepartment__productList"]}>
          {pokemons.map(({ url }: any) => (
            <Card url={url} key={url} />
          ))}
        </div>

        <button
          onClick={() => setOffset(offset + numberItems)}
          className={styles["mainDepartment__viewMore"]}
        >
          Ver mais...
        </button>

        <button
          className={styles["toTop"]}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          top
        </button>
      </main>
      <Footer />
    </>
  );
};

export default Department;
