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
import AdminDashboard from "./components/admin/dashboard";

import User from "./components/user";
import UserDashboard from "./components/user/dashboard";
import Javaa from "./components/course/Javaa";
import BrowseTrainern from "./components/trainer/BrowseTrainer";
import TrainerDashboard from "./components/trainer/dashboard";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="main">
            <Route element={<Home />} path="home" />
            <Route element={<BrowseCourse />} path="browsecourse" />
            <Route element={<Login />} path="Login" />
            <Route element={<Signup />} path="signup" />
            <Route element={<NotFound />} path="NotFound" />
          </Route>

          <Route element={<Trainer />} path="trainer">
            <Route element={<Register />} path="Register" />
            <Route element={<Trainerlogin />} path="login" />
            <Route element={<BrowseTrainern />} path="BrowseTrainer" />
            <Route element={<TrainerDashboard />} path="dashboard">
              <Route element={<Addcourse />} path="Addcourse" />
            </Route>
          </Route>

          <Route element={<User />} path="user">
            <Route element={<UserDashboard />} path="dashboard" />
          </Route>
          <Route element={<Course />} path="course">
            <Route element={<Javaa />} path="Javaa" />
          </Route>

          <Route element={<Admin />} path="admin">
            <Route element={<AdminDashboard />} path="dashboard" />
          </Route>
          <Route exact element={<Navigate to="/main/home" />} path="" />
          <Route exact element={<Navigate to="/main/NotFound" />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
