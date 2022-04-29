import React from "react";
import "../../stylesheet/trainerlogin.css";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export default function Trainerlogin() {
  const url = app_config.api_url;
  const navigate = useNavigate();

  const trainerForm = {
    email: "",
    password: "",
  };

  const submittrainer = (formdata) => {
    console.log(formdata);

    fetch(url + "/trainer/check-login", {
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
            text: "Trainer Login Successfully",
          });

          navigate("/trainer/chat");
        } else if (res.status === 300) {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Trainer Login Failed",
          });
        }
        return res.json();
      })
      .then((data) => {
        sessionStorage.setItem("trainer", JSON.stringify(data));
        console.log(data);
      });
  };

  return (
    <div className="trainer-login">
      <div class="form-signin">
        <main style={{ marginTop: "10rem" }}>
          <Formik initialValues={trainerForm} onSubmit={submittrainer}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <img
                  class="mb-4"
                  src="../assets/brand/bootstrap-logo.svg"
                  alt=""
                  width="72"
                  height="57"
                />
                <h1 class="h3 mb-3 fw-normal">Trainer sign in</h1>

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
    </div>
  );
}
