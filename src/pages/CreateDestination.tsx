import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import {
  createDestination,
  getDestinations,
} from "../features/destinations/destinationsSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import Field from "../components/Field";

const CreateDestination = () => {
  const dispatch = useAppDispatch();
  const { destinations, categories, error, loading } = useAppSelector(
    (state) => state.destinations
  );

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    image: "",
    category: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createDestination({ ...formData, id: nanoid(), rating: 2.5 }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!destinations.length) dispatch(getDestinations());
  }, [destinations.length, dispatch]);

  if (loading) return <h1>Cargando formulario...</h1>;
  if (error) return <h1>Algo salió mal: {error}</h1>;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        type="text"
        label="Nombre"
        value={formData.name}
        setValue={handleChange}
        name="name"
      />
      <Field
        type="text"
        label="Lugar"
        value={formData.location}
        setValue={handleChange}
        name="location"
      />
      <Field
        type="text"
        label="Descripción"
        value={formData.description}
        setValue={handleChange}
        name="description"
      />
      <Field
        type="text"
        label="Link de la imagen"
        value={formData.image}
        setValue={handleChange}
        name="image"
      />
      <div>
        <label htmlFor="category">Categoría</label>
        <select
          value={formData.category}
          onChange={handleChange}
          name="category"
          id="category"
          required
        >
          <option value="" disabled>
            -seleccione una categoría-
          </option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CreateDestination;
