import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Destination } from "./destinationsTypes";

export const getDestinations = createAsyncThunk(
  "destinations/getDestinations",
  async () => {
    try {
      const { data } = await axios.get<Destination[]>("/destinations");
      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener los viajes");
    }
  }
);

export const createDestination = createAsyncThunk(
  "destinations/createDestination",
  async (destination: Destination) => {
    try {
      const { data } = await axios.post("/destinations", destination);
      alert(data.message);
      return destination;
    } catch (error) {
      console.error(error);
      alert("Error al crear viaje");
      throw new Error("Error al crear viaje");
    }
  }
);
