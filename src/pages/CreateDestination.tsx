import { useDestinations } from "../hooks/useDestinations";
import CreateDestinationForm from "../components/CreateDestinationForm";

const CreateDestination = () => {
  const { error, loading } = useDestinations();

  if (loading) return <h1>Cargando formulario...</h1>;
  if (error) return <h1>Algo salió mal: {error}</h1>;

  return (
    <>
      <h1 className="text-neutral-900 text-3xl lg:text-4xl font-bold">
        Agregar nuevo destino
      </h1>
      <p>Llena el formulario con la información requerida.</p>
      <div className="lg:grid lg:grid-cols-9 lg:gap-6 lg:items-center">
        <div className="lg:col-span-4">
          <CreateDestinationForm />
        </div>
        <div className="hidden lg:block lg:col-span-5">
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
