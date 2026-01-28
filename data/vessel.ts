export type Vessel = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  speed: number;
  heading: number;
  lastUpdate: string;
};

export const vesselGroups = [
  {
    manager: "Manager BUMI",
    vessels: [
      {
        id: "marina-express",
        name: "MARINA EXPRESS",
        lat: -0.2701,
        lng: 109.3599,
        speed: 0,
        heading: 330,
        lastUpdate: "28.01.2026 10:29:26",
      },
    ],
  },
];
