import { useState } from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "../hooks/useWindowSize";

const navLinks = [
  { path: "/", label: "Inicio" },
  { path: "/create", label: "Agregar destino" },
];

const Navbar = () => {
  const windowSize = useWindowSize();
  const [isOpen, setOpen] = useState(false);
  const isLargeScreen = () => windowSize.width >= 1024;

  return (
    <nav className="bg-primary-100 text-neutral-800 sticky top-0 z-30 lg:h-screen">
      <div className="flex justify-between p-4 lg:px-6 lg:py-10 z-30">
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
        <>
          <ul className="bg-primary-100 absolute z-30 w-full py-6 px-4 lg:px-6 lg:py-0 space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="text-lg lg:text-xl font-bold"
                  onClick={() => setOpen(!isOpen)}
                  to={link.path}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="lg:hidden h-screen absolute top-full w-full bg-neutral-900/50 backdrop-blur-sm z-20"
            onClick={() => setOpen(!isOpen)}
          />
        </>
      )}
    </nav>
  );
};

export default Navbar;
