import React from "react";
import { Outlet } from "react-router-dom";
import DrawerComponent from "../drawer";
import Sidebar from "../drawer";

const TrainerDashboard = () => {
  return (
    <div>
      {/* <DrawerComponent></DrawerComponent> */}
      <h1>Trainer Dashboard</h1>
      <hr />
      <Outlet />
    </div>
  );
};

export default TrainerDashboard;
