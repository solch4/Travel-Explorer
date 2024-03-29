import { useDestinationDetail } from "../hooks/useDestinationDetail";
import Star from "../components/Star";
import Loader from "../components/Loader";
import Map from "../components/Map";

const DestinationDetail = () => {
  const { destination, error, loading } = useDestinationDetail();

  if (loading) return <Loader>Cargando detalles...</Loader>;
  if (error) return <h1>Algo salió mal: {error}</h1>;
  if (!destination) return null;

  const { name, image, description, rating, location, latitude, longitude } = destination;
  const nOfRating: number[] = [];
  for (let i = 1; i <= Math.round(rating); i++) nOfRating.push(i);

  return (
    <>
      {/* imagen */}
      <div className="h-56 lg:h-96">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={image}
          alt={name}
        />
      </div>
      {/* detalles */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-6">
        <div className="lg:col-span-2 space-y-2 lg:space-y-6">
          <h1 className="main-title">{name}</h1>
          <p className="text-neutral-800 text-2xl lg:text-3xl font-bold">
            {location}
          </p>
          <p>{description}</p>
          <Map latitude={latitude} longitude={longitude} />
        </div>
        {/* rating */}
        <div className="justify-self-end self-start mt-2 lg:mt-0 flex items-center gap-2">
          {/* stars */}
          <div className="flex gap-[2px]" aria-hidden="true">
            {nOfRating.map((n) => (
              <Star className="h-6" key={n} />
            ))}
          </div>
          <p className="text-xl lg:text-2xl font-bold">
            <span className="sr-only">Rating:</span>
            {rating}
          </p>
        </div>
      </div>
    </>
  );
};

export default DestinationDetail;
