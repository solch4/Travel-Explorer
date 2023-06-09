import { Link } from "react-router-dom";
import Star from "./Star";

interface Props {
  id: string;
  name: string;
  image: string;
  rating: number;
  location: string;
}

const DestinationCard: React.FC<Props> = ({
  id,
  name,
  image,
  rating,
  location,
}: Props) => {
  const nOfRating: number[] = [];
  for (let i = 1; i <= Math.round(rating); i++) nOfRating.push(i);

  return (
    <Link
      to={id}
      className="grid grid-cols-4 lg:grid-cols-1 gap-4 lg:gap-2 items-center"
    >
      <div className="h-full">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={image}
          alt={name}
        />
      </div>
      {/* card body */}
      <div className="col-span-3 lg:col-span-1">
        <h2 className="text-lg/tight lg:text-xl/tight text-neutral-900 font-bold">
          {name}
        </h2>
        <p className="text-base text-neutral-800">{location}</p>
        {/* rating */}
        <div className="flex items-end gap-2">
          {/* stars */}
          <div className="flex gap-[2px]" aria-hidden="true">
            {nOfRating.map((n) => (
              <Star key={n} />
            ))}
          </div>
          <p className="text-xs/none">
            <span className="sr-only">Rating:</span>
            {rating}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
