import { Outlet } from "react-router-dom";
import Footer from "./footer";
const User = () => {
  return (
    <>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default User;
