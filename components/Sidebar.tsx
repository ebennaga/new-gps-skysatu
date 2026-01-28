"use client";

import { useState } from "react";
import { marinaHistory } from "@/data/marinaHistory";
import { Vessel } from "@/types/vessel";

type SidebarProps = {
  onSelectVessel: (vessel: Vessel) => void;
};

export default function Sidebar({ onSelectVessel }: SidebarProps) {
  const [fromDate, setFromDate] = useState("2026-01-14");
  const [toDate, setToDate] = useState("2026-01-28");
  const [showHistory, setShowHistory] = useState(false);

  const filtered = marinaHistory.filter((h) => {
    const d = new Date(h.date);
    return d >= new Date(fromDate) && d <= new Date(toDate);
  });

  return (
    <aside className="sidebar">
      <div className="tabs">
        <span>Track</span>
        <span className="active">History</span>
      </div>

      <div className="date-picker">
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
        <button onClick={() => setShowHistory(true)}>🔍 Search</button>
      </div>

      <div className="company">PT Lima Srikandi Jaya</div>

      <div className="vessel checked">
        <label>
          <input type="checkbox" checked readOnly /> MARINA EXPRESS
        </label>

        {showHistory && (
          <div className="history">
            {filtered.map((h, i) => (
              <div
                key={i}
                className="history-row"
                onClick={() =>
                  onSelectVessel({
                    id: "marina-express",
                    name: "MARINA EXPRESS",
                    lat: h.lat,
                    lng: h.lng,
                    speed: h.speed,
                    heading: h.heading,
                  })
                }
              >
                {h.date} {h.time} &nbsp;&nbsp; {h.speed} Knots
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
