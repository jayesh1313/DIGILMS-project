import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar";

import Footer from "./Footer";
import Header from "./Header";
import { Slider } from "@mui/material";
const Trainer = () => {
  return (
    <>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  );
};

export default Trainer;
