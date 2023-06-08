import { useDispatch } from "react-redux";
import { useDestinations } from "../hooks/useDestinations";
import { resetDestinations } from "../features/destinations/destinationsSlice";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import BigButton from "../components/BigButton";

const Home = () => {
  const dispatch = useDispatch();
  const { allDestinations, destinations, error, loading } = useDestinations();

  if (loading) return <h1>Cargando destinos...</h1>;
  if (error) return <h1>Algo salió mal: {error}</h1>;
  if (!allDestinations.length) return null;

  return (
    <>
      <h1 className="text-neutral-900 text-3xl lg:text-4xl font-bold">
        Explorar destinos
      </h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap-6">
        <div className="col-span-2">
          <SearchBar />
        </div>
      </div>
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
