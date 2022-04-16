import React from "react";
import "../../stylesheet/Register.css";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Register() {
  const url = app_config.api_url;

  const trainerForm = {
    fullname: "",
    email: "",
    phone: "",
    password: "",
    exp: 0,
    qualification: "",
  };

  const submitTrainer = (formdata) => {
    console.log(formdata);

    fetch(url + "/trainer/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Trainer Added Successfully",
        });
      });
  };

  return (
    <div>
      <div class="login-box1">
        <h2>Register</h2>

        <Formik initialValues={trainerForm} onSubmit={submitTrainer}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div class="user-box">
                <input
                  type="text"
                  id="fullname"
                  value={values.fullname}
                  onChange={handleChange}
                />
                <label>Full Name</label>
              </div>

              <div class="user-box">
                <input
                  type="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <label>Email</label>
              </div>
              <div class="user-box">
                <input
                  type="number"
                  id="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                <label>Phone</label>
              </div>
              <div class="user-box">
                <input
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <label>Password</label>
              </div>
              <div class="user-box">
                <input
                  type="number"
                  id="exp"
                  value={values.exp}
                  onChange={handleChange}
                />
                <label>Working Experience</label>
              </div>
              <div class="user-box">
                <input
                  type="text"
                  id="qualification"
                  value={values.qualification}
                  onChange={handleChange}
                />
                <label>Qualification</label>
              </div>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
