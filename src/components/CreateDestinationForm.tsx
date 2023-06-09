import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { createDestination } from "../features/destinations/destinationsActions";
import Field from "../components/Field";
import BigButton from "./BigButton";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
      {/* select category */}
      <div className="grid gap-2">
        <label htmlFor="category">Categoría</label>
        <select
          className="w-full bg-transparent border border-neutral-700 p-4 rounded-2xl"
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
