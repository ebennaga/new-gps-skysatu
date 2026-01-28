"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Vessel } from "@/data/vessel";
import { useState } from "react";

// 🔥 INI KUNCINYA
const LeafletMap = dynamic(() => import("@/components/LeafletMapClient"), {
  ssr: false,
});

export default function Page() {
  const [activeVessel, setActiveVessel] = useState<Vessel | null>(null);

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar onSelectVessel={setActiveVessel} />
        <LeafletMap activeVessel={activeVessel} />
      </div>
    </div>
  );
}
