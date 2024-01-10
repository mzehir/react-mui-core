import React from "react";

import ExampleReduxUsage from "./sections/ReduxUse";

export default function DashboardPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      <ExampleReduxUsage />
    </div>
  );
}
