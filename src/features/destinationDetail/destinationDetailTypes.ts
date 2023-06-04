export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  category: string;
  rating: number;
}

export interface DestinationDetailState {
  destination: Destination;
  loading: boolean;
  error: null | string;
}
