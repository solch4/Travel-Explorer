import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { getTravels } from "../features/travels/travelsSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const { travels, error, loading } = useAppSelector((state) => state.travels);

  useEffect(() => {
    dispatch(getTravels());
  }, [dispatch]);

  if (loading) return <h1>Cargando destinos...</h1>;
  if (error) return <h1>Algo salió mal: {error}</h1>;

  return (
    <>
      <h1>Travels</h1>
      {travels.map((travel) => (
        <div key={travel.id}>
          <img src={travel.image} alt={travel.name} />
          <h1>{travel.name}</h1>
          <p>{travel.description}</p>
          <p>{travel.rating}</p>
          <p>{travel.category}</p>
          <p>{travel.location}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
