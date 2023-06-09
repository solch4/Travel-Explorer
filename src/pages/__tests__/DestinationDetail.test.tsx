import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import DestinationDetail from "../DestinationDetail";

import { useDestinationDetail } from "../../hooks/useDestinationDetail";

jest.mock("../../hooks/useDestinationDetail");

describe("DestinationDetail", () => {
  const destination = {
    id: "testId-123",
    name: "Test",
    location: "Test location",
    description: "Test description.",
    image: "https://citizengo.org/sites/default/files/images/test_3.png",
    category: "playa",
    rating: 4,
  };

  let mockError: null | string = null;
  let mockLoading = false;

  const setup = () => {
    // Mockear la función useDestinationDetail
    (useDestinationDetail as jest.Mock).mockReturnValueOnce({
      destination,
      error: mockError,
      loading: mockLoading,
    });

    const utils = renderWithProviders(<DestinationDetail />);
    return {
      ...utils,
    };
  };

  it("debería renderizar el mensaje 'cargando' si está cargando", () => {
    mockLoading = true;
    setup();
    expect(screen.getByText(/cargando/i)).toBeInTheDocument();
  });

  it("debería renderizar los detalles del destino si no hay errores", () => {
    mockLoading = false;
    setup();
    expect(screen.getByText(destination.name)).toBeInTheDocument();
    expect(screen.getByText(destination.location)).toBeInTheDocument();
    expect(screen.getByText(destination.description)).toBeInTheDocument();
    expect(screen.getByText(destination.rating.toString())).toBeInTheDocument();
    expect(screen.getByAltText(destination.name)).toBeInTheDocument();
    expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/cargando/i)).not.toBeInTheDocument();
  });

  it("debería renderizar el mensaje de error si hay errores", () => {
    mockLoading = false;
    mockError = "Error";
    setup();
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
