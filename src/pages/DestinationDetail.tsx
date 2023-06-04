import { useDestinationDetail } from "../hooks/useDestinationDetail";

const DestinationDetail = () => {
  const { destination, error, loading } = useDestinationDetail();

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
