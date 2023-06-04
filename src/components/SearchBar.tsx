import { useState } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { searchDestinations } from "../features/destinations/destinationsSlice";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchDestinations(searchInput));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="search"
        className="border border-red-600"
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
