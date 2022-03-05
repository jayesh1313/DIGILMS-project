import React from "react";
import { Outlet } from "react-router-dom";

const TrainerDashboard = () => {
  return (
    <div>
      <h1>Trainer Dashboard</h1>
      <hr />
      <Outlet />
    </div>
  )
};

export default TrainerDashboard;
