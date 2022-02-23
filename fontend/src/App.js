import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import Trainer from "./components/trainer";

import Signup from "./components/main/signup";
import Register from "./components/trainer/Register";
import Trainerlogin from "./components/trainer/Trainerlogin";
import BrowseCourse from "./components/main/Browsecourse";
import Addcourse from "./components/main/Addcourse";

import Admin from "./components/admin";
import AdminDashboard from "./components/admin/dashboard";

import User from "./components/user";
import UserDashboard from "./components/user/dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="main">
            <Route element={<Home />} path="home" />
            <Route element={<BrowseCourse />} path="browsecourse" />
            <Route element={<Addcourse />} path="Addcourse" />
            <Route element={<Login />} path="Login" />
            <Route element={<Signup />} path="signup" />
            <Route element={<Addcourse />} path="Addcourse" />
          </Route>

          <Route element={<Trainer />} path="trainer">
            <Route element={<Register />} path="Register" />
            <Route element={<Trainerlogin />} path="login" />
          </Route>

          <Route element={<User />} path="user">
            <Route element={<UserDashboard />} path="dashboard" />
          </Route>

          <Route element={<Admin />} path="admin">
            <Route element={<AdminDashboard />} path="dashboard" />
          </Route>
          <Route exact element={<Navigate to="/main/home" />} path="" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
