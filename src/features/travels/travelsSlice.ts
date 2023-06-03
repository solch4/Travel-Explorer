import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Travel {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  category: string;
  rating: number;
}

interface TravelsState {
  travels: Travel[];
  loading: boolean;
  error: null | string;
}

const initialState: TravelsState = {
  travels: [],
  loading: false,
  error: null,
};

export const getTravels = createAsyncThunk("travels/getTravels", async () => {
  try {
    const { data } = await axios.get<Travel[]>("/travels");
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los viajes");
  }
});

export const travelsSlice = createSlice({
  name: "travels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTravels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTravels.fulfilled, (state, action) => {
        state.loading = false;
        state.travels = action.payload;
      })
      .addCase(getTravels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error al obtener los viajes";
      });
  },
});

export default travelsSlice.reducer;
