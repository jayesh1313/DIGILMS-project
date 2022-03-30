import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "../SideBar";

const Admin = () => {
  return (
    <>
      {/* <Header /> */}
      <Sidebar>
      <Outlet />

      </Sidebar>
      {/* <Footer /> */}
    </>
  );
};

export default Admin;
