import { useState } from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "../hooks/useWindowSize";

const Header = () => {
  const windowSize = useWindowSize();
  const [isOpen, setOpen] = useState(false);
  const isLargeScreen = () => windowSize.width >= 1024;

  return (
    <header className="bg-neutral-50 sticky top-0 z-30 lg:h-screen">
      <div className="flex justify-between p-4 lg:px-6 lg:py-10">
        <h1 className="text-neutral-900 text-2xl lg:text-3xl font-bold">
          <Link to="/">Travel Explorer</Link>
        </h1>
        <button
          className="lg:hidden px-2"
          onClick={() => setOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? "X" : "☰"}
        </button>
      </div>
      {/* menú desplegable en mobile / navegación en desktop */}
      {(isOpen || isLargeScreen()) && (
        <ul className="bg-neutral-50 absolute w-full py-6 px-4 lg:px-6 lg:py-0">
          <li>
            <Link
              to="/create"
              className="text-lg lg:text-xl text-neutral-900 font-bold"
            >
              Agregar destino
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
