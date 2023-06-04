import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useDestinations } from "../hooks/useDestinations";
import { resetDestinations } from "../features/destinations/destinationsSlice";
import SearchBar from "../components/SearchBar";

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
        destinations.map((destination) => (
          <Link to={destination.id} key={destination.id}>
            <img src={destination.image} alt={destination.name} />
            <h1>{destination.name}</h1>
            <p>{destination.description}</p>
            <p>{destination.rating}</p>
            <p>{destination.category}</p>
            <p>{destination.location}</p>
          </Link>
        ))
      )}
    </>
  );
};

export default Home;
