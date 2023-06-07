import { useDestinations } from "../hooks/useDestinations";
import CreateDestinationForm from "../components/CreateDestinationForm";

const CreateDestination = () => {
  const { error, loading } = useDestinations();

  if (loading) return <h1>Cargando formulario...</h1>;
  if (error) return <h1>Algo salió mal: {error}</h1>;

  return (
    <>
      <h1>Agregar nuevo destino</h1>
      <p>Llena el formulario con la información requerida.</p>
      <CreateDestinationForm />
    </>
  );
};

export default CreateDestination;
