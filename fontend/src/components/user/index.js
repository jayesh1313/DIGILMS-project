import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import EnrolledCourse from "./EnrolledCourse";
import Sidebar from "../SideBar";
import {
  AccountCircle,
  Book,
  Dashboard,
  HowToReg,
  Login,
} from "@mui/icons-material";

const User = () => {
  const sideOptions = [
    {
      name: "Enrolled Coursre",
      icon: <Dashboard />,
      link: "/user/EnrolledCourse",
    },
    {
      name: "Login Student",
      icon: <Login />,
      link: "/main/Login",
    },
    {
      name: "Register Student",
      icon: <Login />,
      link: "/main/signup",
    },
  ];

  return (
    <>
      <Sidebar sideOptions={sideOptions} title={"User Dashboard"}>
        <Outlet className="mt-5" />  
      </Sidebar>
      <Footer></Footer>
    </>
  );
};

export default User;
