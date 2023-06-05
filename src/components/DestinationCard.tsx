import { Link } from "react-router-dom";

interface Props {
  id: string;
  name: string;
  image: string;
  rating: number;
  location: string;
}

const DestinationCard: React.FC<Props> = ({ id, name, image, rating, location }: Props) => {
  return (
    <Link to={id}>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{location}</p>
      <p>{rating}</p>
    </Link>
  );
};

export default DestinationCard;
