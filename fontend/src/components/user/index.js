import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import EnrolledCourse from "./EnrolledCourse";
import Sidebar from "../SideBar";
import { AccountCircle, Book, Dashboard, HowToReg } from "@mui/icons-material";

const User = () => {
  const sideOptions = [
    {
      name: "Enrolled Coursre",
      icon: <Dashboard />,
      link: "/user/EnrolledCourse",
    },
    {
      name: "Trainer Manager",
      icon: <HowToReg />,
      link: "/admin/TrainerManager",
    },
    {
      name: "Add Course",
      icon: <Book />,
      link: "/admin/Addcourse",
    },
    {
      name: "Manage User",
      icon: <Book />,
      link: "/admin/manageuser",
    },
    {
      name: "Manage Courses",
      icon: <Book />,
      link: "/admin/managecourse",
    },
  ];

  return (
    <>
     <Sidebar sideOptions={sideOptions} title={"User Dashboard"}></Sidebar>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default User;
