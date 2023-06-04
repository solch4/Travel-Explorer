import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { getDestinations } from "../features/destinations/destinationsActions";

const Home = () => {
  const dispatch = useAppDispatch();
  const { destinations, error, loading } = useAppSelector(
    (state) => state.destinations
  );

  useEffect(() => {
    if (!destinations.length) dispatch(getDestinations());
  }, [destinations.length, dispatch]);

  if (loading) return <h1>Cargando destinos...</h1>;
  if (error) return <h1>Algo salió mal: {error}</h1>;

  return (
    <>
      <h1>Destinos</h1>
      {destinations.map((destination) => (
        <Link to={destination.id} key={destination.id}>
          <img src={destination.image} alt={destination.name} />
          <h1>{destination.name}</h1>
          <p>{destination.description}</p>
          <p>{destination.rating}</p>
          <p>{destination.category}</p>
          <p>{destination.location}</p>
        </Link>
      ))}
    </>
  );
};

export default Home;
