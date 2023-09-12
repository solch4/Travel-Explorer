import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDetail = createAsyncThunk(
  "destinations/getDetail",
  async (id: string) => {
    try {
      // al usar una API real se cambiaría la url y respuesta
      const { data } = await axios.get<Destination[]>(`/destinations`);
      const destinationDetail = data.find(
        (destination) => destination.id === id
      );
      if (!destinationDetail) throw new Error("Error al obtener detalles");
      return destinationDetail;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener detalles");
    }
  }
);
