import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheet/header.css";
const Header = () => {
  return (
    <div>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link className="nav-link px-2 text-secondary" to="/main/Home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link px-2 text-white" to="/main/Login">
                  Login As Student
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link px-2 text-white"
                  to="/trainer/Login"
                >
                  Login As Trainer
                </Link>
              </li>
              <li>
                <Link className="nav-link px-2 text-white" to="/main/signup">
                  Register AS Student
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link px-2 text-white"
                  to="/trainer/Register"
                >
                  Rgister As Trainer
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link px-2 text-white"
                  to="/main/Browsecourse"
                >
                  Browse Course
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link px-2 text-white"
                  to="/trainer/dashboard/addcourse"
                >
                  Addcourse
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link px-2 text-white"
                  to="/trainer/BrowseTrainer"
                >
                  Browse Trainer
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link px-2 text-white"
                  to="/trainer/CourseDetail"
                >
                  Course details
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link px-2 text-white"
                  to="/admin/Login"
                >
                  Login As Admin
                </Link>
              </li>
            </ul>

            {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form> */}

         
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
