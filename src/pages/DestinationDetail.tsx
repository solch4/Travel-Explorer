import { useDestinationDetail } from "../hooks/useDestinationDetail";
import Star from "../components/Star";

const DestinationDetail = () => {
  const { destination, error, loading } = useDestinationDetail();
  const { name, image, description, rating, location } = destination;

  const nOfRating: number[] = [];
  for (let i = 1; i <= Math.round(rating); i++) nOfRating.push(i);

  if (loading) return <h1>Cargando detalles...</h1>;
  if (error) return <h1>Algo salió mal: {error}</h1>;

  return (
    <>
      {/* imagen */}
      <div className="h-56 lg:h-96">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={image}
          alt={name}
        />
      </div>
      {/* detalles */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-6">
        <div className="lg:col-span-2 space-y-2 lg:space-y-6">
          <h1 className="text-neutral-900 text-3xl lg:text-4xl font-bold">
            {name}
          </h1>
          <p className="text-neutral-800 text-2xl lg:text-3xl font-bold">
            {location}
          </p>
          <p>{description}</p>
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
