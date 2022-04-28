import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar";

import {
  AccountCircle,
  Book,
  Chat,
  Dashboard,
  HowToReg,
} from "@mui/icons-material";

import Footer from "./Footer";
import Header from "./Header";
import { Slider } from "@mui/material";
const Trainer = () => {
  const sideOptions = [
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
    {
      name: "Chat",
      icon: <Chat  />,
      link: "/trainer/chat",
    },
  ];
  return (
    <>
      <Sidebar sideOptions={sideOptions} title={"Trainer Dashboard"}>
        <Outlet />
      </Sidebar>
    </>
  );
};

export default Trainer;
