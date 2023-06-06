import { useDispatch } from "react-redux";
import { useDestinations } from "../hooks/useDestinations";
import { resetDestinations } from "../features/destinations/destinationsSlice";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";

const Home = () => {
  const dispatch = useDispatch();
  const { destinations, error, loading } = useDestinations();

  if (loading) return <h1>Cargando destinos...</h1>;
  if (error) return <h1>Algo salió mal: {error}</h1>;

  return (
    <>
      <h1>Destinos</h1>
      <SearchBar />
      {!destinations.length ? (
        <>
          <h1>No se encontraron coincidencias</h1>
          <button onClick={() => dispatch(resetDestinations())}>
            Cargar todos los destinos
          </button>
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
