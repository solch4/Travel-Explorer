import { createSlice } from "@reduxjs/toolkit";
import { createDestination, getDestinations } from "./destinationsActions";
import { DestinationsState } from "./destinationsTypes";

const initialState: DestinationsState = {
  destinations: [],
  categories: [],
  loading: false,
  error: null,
};

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
