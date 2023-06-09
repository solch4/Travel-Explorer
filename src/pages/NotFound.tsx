import { useNavigate } from "react-router-dom";
import BigButton from "../components/BigButton";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-neutral-900 text-3xl lg:text-4xl font-bold">
        404 - Página no encontrada
      </h1>
      <p>¡Ups! Parece que la página que buscas no existe.</p>
      <div className="my-4 mx-auto lg:mx-0 w-1/2 md:w-1/3 h-full">
        <img
          src="/assets/lost-person.svg"
          alt="Ilustración de una persona perdida"
        />
      </div>
      <div className="lg:place-self-start">
        <BigButton handleClick={() => navigate("/")} type="button">
          Ir a página principal
        </BigButton>
      </div>
    </>
  );
};

export default NotFound;
