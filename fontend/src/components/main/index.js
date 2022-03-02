import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header";
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