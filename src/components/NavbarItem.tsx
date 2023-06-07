import { Link } from "react-router-dom";

interface Props {
  path: string;
  label: string;
}

const NavbarItem: React.FC<Props> = ({ path, label }: Props) => {
  return (
    <li>
      <Link to={path} className="text-lg lg:text-xl font-bold">
        {label}
      </Link>
    </li>
  );
};

export default NavbarItem;
