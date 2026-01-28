"use client";

import { useState } from "react";

/** helper format yyyy-mm-dd → dd.mm.yyyy */
const formatDate = (value: string) => {
  if (!value) return "";
  const [y, m, d] = value.split("-");
  return `${d}.${m}.${y}`;
};

export default function HistoryHeader() {
  const [fromDate, setFromDate] = useState("2026-01-28");
  const [toDate, setToDate] = useState("2026-01-28");

  return (
    <div className="history-wrapper">
      {/* Tabs */}
      <div className="history-tabs">
        <button className="history-tab">Track</button>
        <button className="history-tab active">History</button>
      </div>

      {/* Date picker row */}
      <div className="history-date">
        {/* FROM */}
        <div className="date-input">
          <input type="text" value={formatDate(fromDate)} readOnly />
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>

        {/* TO */}
        <div className="date-input">
          <input type="text" value={formatDate(toDate)} readOnly />
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>

        <button className="btn-search">🔍 Search</button>

        <button className="btn-download" title="Download">
          ⬇
        </button>
      </div>
    </div>
  );
}
