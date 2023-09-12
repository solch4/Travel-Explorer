import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { createDestination } from "../features/destinations/destinationsActions";
import Field from "../components/Field";
import BigButton from "./BigButton";

type FieldEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

interface Props {
  categories: string[];
}

const CreateDestinationForm: React.FC<Props> = ({ categories }: Props) => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    image: "",
    category: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // esto se cambiaría al usar una api real
    dispatch(
      createDestination({
        ...formData,
        id: nanoid(),
        rating: 2.5,
        latitude: 1,
        longitude: 1,
      })
    );
  };

  const handleChange = (e: FieldEvent) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Field
        type="text"
        label="Nombre"
        value={formData.name}
        onChange={handleChange}
        name="name"
      />
      <Field
        type="text"
        label="Lugar"
        value={formData.location}
        onChange={handleChange}
        name="location"
      />
      <Field
        type="text"
        label="Descripción"
        value={formData.description}
        onChange={handleChange}
        name="description"
      />
      <Field
        type="text"
        label="Link de la imagen"
        value={formData.image}
        onChange={handleChange}
        name="image"
      />
      {/* select category */}
      <div className="field">
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

      <BigButton type="submit">Enviar</BigButton>
    </form>
  );
};

export default CreateDestinationForm;
