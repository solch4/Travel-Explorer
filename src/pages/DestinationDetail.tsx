import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../features/destinationDetail/destinationDetailSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

const DestinationDetail = () => {
  const dispatch = useAppDispatch();
  const { destinationId } = useParams();
  const { destination, error, loading } = useAppSelector(
    (state) => state.destinationDetail
  );

  useEffect(() => {
    if (destinationId) dispatch(getDetail(destinationId));
  }, [dispatch, destinationId]);

  if (loading) return <h1>Cargando detalles...</h1>;
  if (error) return <h1>Algo salió mal: {error}</h1>;

  return (
    <>
      <h1>Destino</h1>
      {destination && (
        <div key={destination.id}>
          <img src={destination.image} alt={destination.name} />
          <h1>{destination.name}</h1>
          <p>{destination.description}</p>
          <p>{destination.rating}</p>
          <p>{destination.category}</p>
          <p>{destination.location}</p>
        </div>
      )}
    </>
  );
};

export default DestinationDetail;
