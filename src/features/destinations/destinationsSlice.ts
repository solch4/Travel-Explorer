import { createSlice } from "@reduxjs/toolkit";
import { createDestination, getDestinations } from "./destinationsActions";
import { Destination, DestinationsState } from "./destinationsTypes";

const initialState: DestinationsState = {
  allDestinations: [],
  destinations: [],
  categories: [],
  loading: false,
  error: null,
};

export const destinationsSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {
    searchDestinations: (state, action) => {
      // se pasan keyword, name y location a minús. si el usuario busca "PLAYA" aparecen "Playa", "playa", etc
      const keyword = action.payload.toLowerCase();
      // agrego destination al comienzo o al final según si la keyword está en el name o en la location.
      // con esto se muestran primero las coincidencias con el name y al final con la location
      const searchResults: Destination[] = [];
      state.allDestinations.forEach((destination) => {
        if (destination.name.toLowerCase().includes(keyword)) {
          searchResults.unshift(destination);
        } else if (destination.location.toLowerCase().includes(keyword)) {
          searchResults.push(destination);
        }
      });
      state.destinations = searchResults;
    },
    resetDestinations: (state) => {
      state.destinations = state.allDestinations;
    },
  },
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
        state.allDestinations = action.payload;
        state.destinations = action.payload;
        state.categories = categories;
      })
      .addCase(getDestinations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error al obtener los viajes";
      })
      .addCase(createDestination.fulfilled, (state, action) => {
        state.allDestinations.push(action.payload);
      });
  },
});

export const { searchDestinations, resetDestinations } =
  destinationsSlice.actions;

export default destinationsSlice.reducer;
