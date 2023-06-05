import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Travel Explorer</Link>
      </h1>
    </header>
  );
};

export default Header;
