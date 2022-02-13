import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import footer from "./components/main/footer";

import  Signup  from "./components/main/signup";
import { dashboard } from "./components/user/dashboard";

function App() {
  return (
    <div>
      <header></header>
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
<footer></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;