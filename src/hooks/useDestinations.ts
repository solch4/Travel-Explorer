import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { getDestinations } from "../features/destinations/destinationsActions";

export const useDestinations = () => {
  const dispatch = useAppDispatch();

  const { allDestinations, destinations, categories, error, loading } =
    useAppSelector((state) => state.destinations);

  useEffect(() => {
    if (!allDestinations.length) dispatch(getDestinations());
  }, [allDestinations.length, dispatch]);

  return {
    allDestinations,
    destinations,
    categories,
    error,
    loading,
  };
};
