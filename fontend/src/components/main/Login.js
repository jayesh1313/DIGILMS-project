import React from "react";
import "../../stylesheet/Login.css";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import'../../images/logo.png'
import { useNavigate } from "react-router-dom";
export default function Login() {
  const url = app_config.api_url;

  const userForm = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const submituser = (formdata) => {
    console.log(formdata);

    fetch(url + "/user/check-login", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "user Login Successfully",
          });

          navigate("/main/browsecourse");
        } else if (res.status === 300) {
          Swal.fire({
            icon: "error",
            title: "oops",
            text: "User Login Failed",
          });
        }
        return res.json();
      })
      .then((data) => {
        sessionStorage.setItem("user", JSON.stringify(data));
        console.log(data);
      });
  };

  return (
    <div class="form-signin">
      <main style={{ marginTop: "10rem" }}>
        <Formik initialValues={userForm} onSubmit={submituser}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <img
                class="mb-4"
                src="../../images/logo.png"
                alt=""
                width="72"
                height="57"
              />
              <h1 class="h3 mb-3 fw-normal">Student sign in</h1>

              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button>
              <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
          )}
        </Formik>
      </main>
    </div>
  );
}
