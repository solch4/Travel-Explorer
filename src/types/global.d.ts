declare global {
  interface Destination {
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
}

export {};
