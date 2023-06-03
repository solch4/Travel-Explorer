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
  loading: boolean;
  error: null | string;
}

const initialState: DestinationsState = {
  destinations: [],
  loading: false,
  error: null,
};

export const getDestinations = createAsyncThunk("destinations/getDestinations", async () => {
  try {
    const { data } = await axios.get<Destination[]>("/destinations");
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los viajes");
  }
});

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
        state.loading = false;
        state.destinations = action.payload;
      })
      .addCase(getDestinations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error al obtener los viajes";
      });
  },
});

export default destinationsSlice.reducer;
