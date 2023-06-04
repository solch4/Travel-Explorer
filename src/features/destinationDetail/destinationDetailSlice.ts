import { createSlice } from "@reduxjs/toolkit";
import { getDetail } from "./destinationDetailActions";
import { DestinationDetailState } from "./destinationDetailTypes";

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
