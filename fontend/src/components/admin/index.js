import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";
import Sidebar from "../SideBar";
import { AccountCircle, Dashboard } from "@mui/icons-material";

const Admin = () => {
  const sideOptions = [
    {
      name: "Dashboard",
      icon: <Dashboard />,
      link: "/admin/dashboard",
    },
    {
      name: "Dashboard",
      icon: <Dashboard />,
      link: "/admin/dashboard",
    },
  ];

  return (
    <>
      {/* <Header /> */}
      <Sidebar sideOptions={sideOptions}>
        <Outlet />
      </Sidebar>
      <Footer />
    </>
  );
};

export default Admin;
