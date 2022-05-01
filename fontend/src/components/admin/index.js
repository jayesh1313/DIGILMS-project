import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";
import Sidebar from "../SideBar";
import {
  AccountCircle,
  AddCircleOutline,
  Book,
  Dashboard,
  HowToReg,
} from "@mui/icons-material";

const Admin = () => {
  const sideOptions = [
    {
      name: "Dashboard",
      icon: <Dashboard />,
      link: "/admin/dashboard",
    },
    {
      name: "Add New Trainer",
      icon: <AddCircleOutline />,
      link: "/admin/addtrainer",
    },
    {
      name: "Trainer Manager",
      icon: <HowToReg />,
      link: "/admin/TrainerManager",
    },
    {
      name: "Add Course",
      icon: <Book />,
      link: "/admin/Addcourse",
    },
    {
      name: "Manage User",
      icon: <Book />,
      link: "/admin/manageuser",
    },
    {
      name: "Manage Courses",
      icon: <Book />,
      link: "/admin/managecourse",
    },
  ];

  return (
    <>
      {/* <Header /> */}
      <Sidebar sideOptions={sideOptions} title={"Admin Dashboard"}>
        <Outlet />
      </Sidebar>
      {/* <Footer /> */}
    </>
  );
};

export default Admin;
