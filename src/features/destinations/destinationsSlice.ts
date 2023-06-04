import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  category: string;
  rating: number;
}

interface DestinationsState {
  destinations: Destination[];
  categories: string[];
  loading: boolean;
  error: null | string;
}

const initialState: DestinationsState = {
  destinations: [],
  categories: [],
  loading: false,
  error: null,
};

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

export const destinationsSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDestinations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDestinations.fulfilled, (state, action) => {
        // al crecer la app habrá categorías repetidas. por eso se hace un set y se filtra para no tener valores repetidos
        const allCategories = new Set(
          action.payload.map((destination) => destination.category)
        );
        const categories = [...allCategories];
        state.loading = false;
        state.destinations = action.payload;
        state.categories = categories;
      })
      .addCase(getDestinations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error al obtener los viajes";
      })
      .addCase(createDestination.fulfilled, (state, action) => {
        state.destinations.push(action.payload);
      });
  },
});

export default destinationsSlice.reducer;
