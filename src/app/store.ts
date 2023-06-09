import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {destinations: DestinationsState}
export type AppDispatch = AppStore["dispatch"];
export type AppStore = ReturnType<typeof setupStore>;
