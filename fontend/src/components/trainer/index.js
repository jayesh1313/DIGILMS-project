import { Outlet } from "react-router-dom";
// import Footer from "./footer";
import Header from "./Header";
const Trainer = () => {
  return (
    <>
    <Header></Header>
      <Outlet />
      {/* <footer></footer> */}
    </>
  );
};

export default Trainer;