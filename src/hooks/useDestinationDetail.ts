import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { getDetail } from "../features/destinationDetail/destinationDetailActions";

export const useDestinationDetail = () => {
  const dispatch = useAppDispatch();
  const { destinationId } = useParams();
  const { destination, error, loading } = useAppSelector(
    (state) => state.destinationDetail
  );

  useEffect(() => {
    if (destinationId) dispatch(getDetail(destinationId));
  }, [dispatch, destinationId]);

  return {
    destination,
    error,
    loading,
  };
};
