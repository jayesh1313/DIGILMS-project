import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const User = () => {
  return (
    <>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default User;
