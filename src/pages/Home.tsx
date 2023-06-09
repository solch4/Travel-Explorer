import { useDispatch } from "react-redux";
import { useDestinations } from "../hooks/useDestinations";
import {
  filterDestinations,
  resetDestinations,
} from "../features/destinations/destinationsSlice";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import BigButton from "../components/BigButton";
import Loader from "../components/Loader";
import FilterDropdown from "../components/FilterDropdown";

const Home = () => {
  const dispatch = useDispatch();
  const { allDestinations, destinations, categories, error, loading } =
    useDestinations();

  if (loading) return <Loader>Cargando destinos...</Loader>;
  if (error) return <h1>Algo salió mal: {error}</h1>;
  if (!allDestinations.length) return null;

  return (
    <>
      <h1 className="main-title">Explorar destinos</h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap-6">
        <div className="col-span-2">
          <SearchBar />
        </div>
      </div>
      <FilterDropdown
        label="Filtrar por categoría"
        options={categories}
        onChange={(e) => dispatch(filterDestinations(e.target.value))}
      />
      {!destinations.length ? (
        <>
          <h1 className="text-neutral-900 text-lg lg:text-xl font-bold">
            No se encontraron coincidencias
          </h1>
          <div className="w-fit">
            <BigButton
              type="reset"
              handleClick={() => dispatch(resetDestinations())}
            >
              Cargar todos los destinos
            </BigButton>
          </div>
        </>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
