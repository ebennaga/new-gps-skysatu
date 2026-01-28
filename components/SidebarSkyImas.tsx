"use client";

import { useState } from "react";
import { sidebarData, VesselRow } from "@/data/sidebar";

interface SidebarSkyImasProps {
  onSelectVessel: (vessel: VesselRow) => void;
}

export default function SidebarSkyImas({
  onSelectVessel,
}: SidebarSkyImasProps) {
  const [checked, setChecked] = useState<string[]>([]);

  const handleClick = (vessel: VesselRow) => {
    setChecked((prev) =>
      prev.includes(vessel.id)
        ? prev.filter((v) => v !== vessel.id)
        : [...prev, vessel.id],
    );

    onSelectVessel(vessel);
  };

  return (
    <aside className="sidebar">
      <div className="table-header">
        <span>Name</span>
        <span>Last Update</span>
        <span>Speed</span>
      </div>

      {sidebarData.map((group) => (
        <div key={group.id}>
          <div className="group-row">{group.name}</div>

          {group.vessels.map((v) => (
            <div
              key={v.id}
              className={`row ${checked.includes(v.id) ? "active" : ""}`}
              onClick={() => handleClick(v)}
            >
              <span>{v.name}</span>
              <span>{v.lastUpdate}</span>
              <span>{v.speed}</span>
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
}
