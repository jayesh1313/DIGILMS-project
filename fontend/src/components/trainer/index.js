import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
const Trainer = () => {
  return (
    <>
      <Header></Header>

      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Trainer;
