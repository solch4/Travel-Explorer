export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  latitude: number;
  longitude: number;
}

export interface DestinationsState {
  allDestinations: Destination[];
  destinations: Destination[];
  categories: string[];
  loading: boolean;
  error: null | string;
}
