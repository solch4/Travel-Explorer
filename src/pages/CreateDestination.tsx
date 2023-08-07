import { useDestinations } from "../hooks/useDestinations";
import CreateDestinationForm from "../components/CreateDestinationForm";
import Loader from "../components/Loader";

const CreateDestination = () => {
  const { categories, error, loading } = useDestinations();

  if (loading) return <Loader>Cargando formulario...</Loader>;
  if (error) return <h1>Algo salió mal: {error}</h1>;
  if (!categories.length) return null;

  return (
    <>
      <h1 className="main-title">Agregar nuevo destino</h1>
      <p>Llena el formulario con la información requerida.</p>
      <div className="xl:grid xl:grid-cols-9 xl:gap-6 xl:items-center">
        <div className="xl:col-span-4">
          <CreateDestinationForm categories={categories} />
        </div>
        <div className="hidden xl:block xl:col-span-5 p-10">
          <img
            className="w-full"
            src="./assets/illustration.svg"
            alt="Ilustración de una mujer caminando en el bosque"
          />
        </div>
      </div>
    </>
  );
};

export default CreateDestination;
