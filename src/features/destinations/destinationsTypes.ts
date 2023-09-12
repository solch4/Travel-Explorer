export interface DestinationsState {
  allDestinations: Destination[];
  destinations: Destination[];
  categories: string[];
  loading: boolean;
  error: null | string;
}
