import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Admin = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Admin;
