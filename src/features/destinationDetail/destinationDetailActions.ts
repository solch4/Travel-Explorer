import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Destination } from "./destinationDetailTypes";

export const getDetail = createAsyncThunk(
  "destinations/getDetail",
  async (id: string) => {
    try {
      const { data } = await axios.get<Destination>(`/destinations/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener detalles");
    }
  }
);
