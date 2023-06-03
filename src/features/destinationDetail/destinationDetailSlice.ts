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

interface DestinationDetailState {
  destination: Destination;
  loading: boolean;
  error: null | string;
}

const initialState: DestinationDetailState = {
  destination: {
    id: "",
    name: "",
    location: "",
    description: "",
    image: "",
    category: "",
    rating: 0,
  },
  loading: false,
  error: null,
};

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

export const destinationDetailSlice = createSlice({
  name: "destinationDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.destination = action.payload;
      })
      .addCase(getDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error al obtener detalles";
      });
  },
});

export default destinationDetailSlice.reducer;
