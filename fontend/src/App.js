import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import Trainer from "./components/trainer";

import  Signup  from "./components/main/signup";
import { dashboard } from "./components/user/dashboard";
import Register from "./components/trainer/Register";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
        <Route element={<Main />} path="main">
            <Route element={<Home />} path="home" />
          </Route>
          <Route element={<Main />} path="main">
            <Route element={<Login />} path="Login" />
          </Route>
          <Route element={<Main />} path="main">
            <Route element={<Signup />} path="signup" />
          </Route>

          <Route element={<Trainer />} path="trainer">
            <Route element={<Register />} path="Register" />
          </Route>
         
          {/* <Route element={<user />} path="user">
            <Route element={<dashboard />} path="dashboard" />
          </Route>
          <Route element={<user />} path="user">
            <Route element={<header />} path="header" />
          </Route>
          <Route element={<user />} path="user">
            <Route element={<footer />} path="footer" />
          </Route>
           <Route element={<admin />} path="admin">
            <Route element={<Admindashboard />} path="dashboard" />
          </Route> 
          <Route element={<admin />} path="user">
            <Route element={<header />} path="header" />
          </Route>
          <Route element={<admin />} path="user">
            <Route element={<footer />} path="footer" />
          </Route> */}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;