import { Outlet } from "react-router-dom";
import './SideBar'
import Footer from "./Footer";
import Header from "./Header";
import { Slider } from "@mui/material";
const Trainer = () => {
  return (
    <>
      <Slider>
        <Outlet />
      </Slider>
    </>
  );
};

export default Trainer;
