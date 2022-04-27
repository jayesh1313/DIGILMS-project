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
  Person,
} from "@mui/icons-material";
import Profile from "../Profile";
import { AvatarGroup } from "@mui/material";

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
    {
      name: "Student Profile",
      icon: <Person />,
      link: "./Profile",
    },
  ];

  return (
    <>
      <Sidebar sideOptions={sideOptions} title={"User Dashboard"}>
        <Outlet />
      </Sidebar>
      {/* <Footer></Footer> */}
    </>
  );
};

export default User;
