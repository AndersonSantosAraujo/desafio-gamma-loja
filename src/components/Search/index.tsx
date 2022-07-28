import Header from "components/Header";
import React from "react";
import Card from "components/Department/Card";
import styles from "./Search.module.scss";
import { useSearchParams } from "react-router-dom";
import Footer from "components/Footer";

const Search = () => {
  const numberItems = 12;
  const [offset, setOffset] = React.useState<number>(numberItems);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pokemons, setPokemons] = React.useState([]);
  const [maxItems, setMaxItems] = React.useState(true);

  React.useEffect(() => {
    setOffset(numberItems);
  }, [searchParams]);

  React.useEffect(() => {
    const searchterm = searchParams.get("searchTerm") || "";
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1499`)
      .then((response) => response.json())
      .then(({ results }) => {
        var regex = new RegExp(searchterm, "i");

        var filter = results.filter(({ name }: { name: string }) => {
          return regex.test(name);
        });

        setPokemons(filter.slice(0, offset));
        // if (filter.length <= offset) setMaxItems(false);
      });
  }, [searchParams, offset]);

  return (
    <>
      <Header />
      <main className="container">
        <div className={styles["mainDepartment"]}>
          <div className={styles["mainDepartment__productList"]}>
            {pokemons.map(({ url }: { url: string }) => (
              <Card url={url} key={url} />
            ))}
          </div>
        </div>

        {maxItems && (
          <button
            onClick={() => setOffset(offset + numberItems)}
            className={styles["mainDepartment__viewMore"]}
          >
            Ver mais...
          </button>
        )}

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

export default Search;
