import { useState } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { searchDestinations } from "../features/destinations/destinationsSlice";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    dispatch(searchDestinations(searchInput.trim()));
  };

  return (
    <form className="relative flex items-center" onSubmit={handleSearch}>
      <label htmlFor="searchInput" className="sr-only">
        Buscar destino
      </label>
      <input
        className="placeholder:text-neutral-600 rounded-full py-2 md:py-3 pr-4 md:pr-6 pl-12 md:pl-14 w-full"
        placeholder="Buscar destino..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="search"
        id="searchInput"
      />
      <button
        className="absolute left-0 translate-x-1 md:translate-x-2 bg-primary-500 hover:bg-primary-600 text-primary-50 rounded-full p-2 transition"
        type="submit"
      >
        <svg
          className="fill-current h-4 md:h-5"
          aria-label="Buscar"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.2515 8.12613C16.2515 9.91884 15.6696 11.5748 14.6893 12.9184L19.6338 17.8669C20.1221 18.3551 20.1221 19.148 19.6338 19.6362C19.1456 20.1244 18.3528 20.1244 17.8646 19.6362L12.92 14.6877C11.5764 15.6719 9.92042 16.2499 8.12772 16.2499C3.64009 16.2499 0.00390625 12.6138 0.00390625 8.12613C0.00390625 3.63851 3.64009 0.00231934 8.12772 0.00231934C12.6153 0.00231934 16.2515 3.63851 16.2515 8.12613ZM8.12772 13.7503C8.86629 13.7503 9.59764 13.6048 10.28 13.3222C10.9624 13.0395 11.5824 12.6253 12.1046 12.103C12.6269 11.5808 13.0411 10.9608 13.3238 10.2784C13.6064 9.59605 13.7519 8.86471 13.7519 8.12613C13.7519 7.38755 13.6064 6.65621 13.3238 5.97385C13.0411 5.29149 12.6269 4.67149 12.1046 4.14924C11.5824 3.62698 10.9624 3.21271 10.28 2.93007C9.59764 2.64743 8.86629 2.50195 8.12772 2.50195C7.38914 2.50195 6.65779 2.64743 5.97544 2.93007C5.29308 3.21271 4.67308 3.62698 4.15082 4.14924C3.62857 4.67149 3.2143 5.29149 2.93165 5.97385C2.64901 6.65621 2.50354 7.38755 2.50354 8.12613C2.50354 8.86471 2.64901 9.59605 2.93165 10.2784C3.2143 10.9608 3.62857 11.5808 4.15082 12.103C4.67308 12.6253 5.29308 13.0395 5.97544 13.3222C6.65779 13.6048 7.38914 13.7503 8.12772 13.7503Z" />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
