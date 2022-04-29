import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header2";
const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Main;
