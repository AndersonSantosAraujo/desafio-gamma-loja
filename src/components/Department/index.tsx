import Header from "components/Header";
import Card from "components/Department/Card";
import styles from "./Department.module.scss";
import Footer from "components/Footer";
import Filter from "./Filter";
import { useEffect, useState } from "react";

const Department = () => {
  const numberItems = 12;
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(numberItems);
  const [type, setType] = useState([]);

  useEffect(() => {
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
          const results = pokemon.map((data: IPokemon) => {
            return data.pokemon;
          });

          setPokemons(results.slice(0, offset));
        });
    }
  }, [offset, type]);

  interface IPokemon {
    pokemon: { name: string; url: string };
    slot: number;
  }

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
          {pokemons.map(({ url }: { url: string }) => (
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
