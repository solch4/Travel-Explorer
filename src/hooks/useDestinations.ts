import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { getDestinations } from "../features/destinations/destinationsActions";

export const useDestinations = () => {
  const dispatch = useAppDispatch();

  const { destinations, categories, error, loading } = useAppSelector(
    (state) => state.destinations
  );

  useEffect(() => {
    if (!destinations.length) dispatch(getDestinations());
  }, [destinations.length, dispatch]);

  return {
    destinations,
    categories,
    error,
    loading,
  };
};
