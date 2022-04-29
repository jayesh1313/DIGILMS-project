import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import Trainer from "./components/trainer";
import Course from "./components/course";

import Signup from "./components/main/signup";
import Register from "./components/trainer/Register";
import Trainerlogin from "./components/trainer/Trainerlogin";
import BrowseCourse from "./components/main/Browsecourse";
import NotFound from "./components/main/NotFound";
import Addcourse from "./components/trainer/Addcourse";

import Admin from "./components/admin";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/dashboard";
import TrainerManager from "./components/admin/TrainerManager";

import User from "./components/user";
import UserDashboard from "./components/user/dashboard";
import Javaa from "./components/course/Javaa";
import BrowseTrainer from "./components/trainer/BrowseTrainer";
import TrainerDashboard from "./components/trainer/dashboard";
import CourseDetail from "./components/trainer/CourseDetail";
import Authenticator from "./authenticator";
import ManageUsers from "./components/admin/manageUsers";
import ManageCourses from "./components/admin/manageCourses";

import { Toaster } from "react-hot-toast";
import ViewCourse from "./components/main/viewCourse";
import EnrolledCourse from "./components/user/EnrolledCourse";
import Checkout from "./components/user/checkout";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Profile from "./components/Profile";
import Study from "./components/user/study";
import TrainerChat from "./components/trainer/trainerChat";
import Chat from "./components/user/chat";
import TrainerAuthenticator from "./trainerAuthenticator";

function App() {
  const stripe = loadStripe("pk_test_Vmvhpm2TASsGcgF4RcyQfkF000KwucQJR1");

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Elements stripe={stripe}>
        <Routes>
          <Route element={<Main />} path="main">
            <Route element={<Home />} path="home" />
            <Route element={<BrowseCourse />} path="browsecourse" />
            <Route element={<Login />} path="Login" />
            <Route element={<Signup />} path="signup" />
            <Route element={<NotFound />} path="NotFound" />
            <Route element={<ViewCourse />} path="viewcourse/:id" />
            <Route element={<Trainerlogin />} path="trainerlogin" />
          </Route>

          <Route
            element={
              <TrainerAuthenticator>
                <Trainer />
              </TrainerAuthenticator>
            }
            path="trainer"
          >
            <Route element={<Register />} path="Register" />
            <Route element={<BrowseTrainer />} path="BrowseTrainer" />
            <Route element={<TrainerDashboard />} path="dashboard" />
            <Route element={<Addcourse />} path="Addcourse" />
            <Route element={<CourseDetail />} path="CourseDetail" />
            <Route element={<TrainerChat />} path="chat" />
          </Route>

          <Route element={<User />} path="user">
            <Route element={<UserDashboard />} path="dashboard" />
            <Route element={<EnrolledCourse />} path="EnrolledCourse" />
            <Route element={<Checkout />} path="checkout" />
            <Route element={<Profile />} path="Profile" />
            <Route element={<Study />} path="study/:id" />
            <Route element={<Chat />} path="chat/:trainerid" />
          </Route>
          <Route
            element={
              <Authenticator>
                <Admin />
              </Authenticator>
            }
            path="admin"
          >
            <Route element={<AdminDashboard />} path="dashboard" />
            <Route element={<TrainerManager />} path="TrainerManager" />
            <Route element={<AdminLogin />} path="login" />
            <Route element={<ManageUsers />} path="manageuser" />
            <Route element={<ManageCourses />} path="managecourse" />
          </Route>

          <Route
            exact
            element={<Navigate to="/admin/manageuser" />}
            path="/admin"
          />
          <Route exact element={<Navigate to="/main/home" />} path="" />
          {/* <Route exact element={<Navigate to="/main/NotFound" />} path="*" /> */}
        </Routes>
      </Elements>
    </BrowserRouter>
  );
}

export default App;
