import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar";

import Footer from "./Footer";
import Header from "./Header";
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
