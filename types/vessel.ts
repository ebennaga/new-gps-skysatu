export type VesselPosition = {
  lat: number;
  lng: number;
  speed: number;
  heading: number;
};

export type Vessel = {
  id: string;
  name: string;
  lat: number | null;
  lng: number | null;
  speed: number;
  heading: number | undefined;
};
