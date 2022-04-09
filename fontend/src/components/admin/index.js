import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";
import Sidebar from "../SideBar";
import { AccountCircle, Book, Dashboard, HowToReg } from "@mui/icons-material";

const Admin = () => {
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
      {/* <Header /> */}
      <Sidebar sideOptions={sideOptions}>
        <Outlet />
      </Sidebar>
      <Footer />
    </>
  );
};

export default Admin;
