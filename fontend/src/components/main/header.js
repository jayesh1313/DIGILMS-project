import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheet/header.css";
const Header = () => {
  return (
    <div>
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">LMS</div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <Link to="/main/login">Login as Student</Link>
          <Link to="/trainer/login">Login as Trainer</Link>
          <Link to="/main/signup">Register as Student</Link>
          <Link to="/trainer/Register">Register as Trainer</Link>
          <Link to="/main/browsecourse">Get Started</Link>
          <Link to="/trainer/Addcourse">Add Course</Link>
          {/* <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a> */}
        </div>
      </div>
    </div>
  );
};
export default Header;
