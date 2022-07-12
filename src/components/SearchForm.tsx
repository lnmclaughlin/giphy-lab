import { FormEvent, useState } from "react";
import "./SearchForm.css";

interface Props {
  updateSearchTerm: (s: string) => void;
}

const SearchForm = ({ updateSearchTerm }: Props) => {
  const [search, setSearch] = useState("");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    updateSearchTerm(search);
    setSearch("");
  };
  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <label htmlFor="search">Search for a GIF</label>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button className="search-btn">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
