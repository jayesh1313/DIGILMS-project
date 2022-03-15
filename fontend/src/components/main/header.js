import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheet/header.css";
const Header = () => {
  return (
    <div>
      <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHef="#bootstrap"/></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link  class="nav-link px-2 text-secondary" to="/main/Home">Home</Link></li>
          <li><Link  class="nav-link px-2 text-white" to="/main/Login">Login As Student</Link></li>
          <li><Link  class="nav-link px-2 text-white" to="/trainer/TrainerLogin">Login As Trainer</Link></li>
          <li><Link  class="nav-link px-2 text-white" to="/main/signup">Register AS Student</Link></li>
          <li><Link  class="nav-link px-2 text-white" to="/trainer/Register">Rgister As Trainer</Link></li>
          <li><Link  class="nav-link px-2 text-white" to="/main/Browsecourse">Browse Course</Link></li>
          <li><Link  class="nav-link px-2 text-white" to="/trainer/dashboard/addcourse">Addcourse</Link></li>
          <li><Link  class="nav-link px-2 text-white" to="/trainer/BrowseTrainer">Browse Trainer</Link></li>
        </ul>

        {/* <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form> */}

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>

    </div>
  );
};
export default Header;
