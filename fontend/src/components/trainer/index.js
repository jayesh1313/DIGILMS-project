import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar";

import { AccountCircle, Book, Dashboard, HowToReg } from "@mui/icons-material";

import Footer from "./Footer";
import Header from "./Header";
import { Slider } from "@mui/material";
const Trainer = () => {
  const sideOptions = [
    {
      name: "Dashboard",
      icon: <Dashboard />,
      link: "/admin/dashboard",
    },
    {
      name: "Trainer Manager",
      icon: <HowToReg />,
      link: "/trainer/BrowseTrainer",
    },
    {
      name: "Add Course",
      icon: <Book />,
      link: "/trainer/Addcourse",
    },
  ];
  return (
    <>
      <Sidebar sideOptions={sideOptions}>
        <Outlet />
      </Sidebar>
    </>
  );
};

export default Trainer;
