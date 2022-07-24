import { MagnifyingGlass } from "phosphor-react";
import React from "react";
import styles from "./Search.module.scss";
import { useNavigate } from "react-router";

const Search = () => {
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/search?searchTerm=${search}`);
  }

  return (
    <form className={styles["search"]} onSubmit={handleSubmit}>
      <input
        className={styles["search__input"]}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search..."
      />
      <MagnifyingGlass
        size={20}
        color="#000"
        className={styles["search__ico"]}
      />
    </form>
  );
};

export default Search;
