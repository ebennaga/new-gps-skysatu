// sidebarData.ts
export type VesselRow = {
  id: string;
  name: string;
  lastUpdate: string;
  speed: number;
  heading: number;
  lat: number;
  lng: number;
};

export const sidebarData = [
  {
    id: "group-1",
    name: "PT Lima Srikandi Jaya",
    vessels: [
      {
        id: "marina-express",
        name: "MARINA EXPRESS",
        lastUpdate: "28.01.2026 10:29:26",
        speed: 0.0,
        heading: 330,
        lat: -0.2701,
        lng: 109.3599,
      },
    ],
  },
];
