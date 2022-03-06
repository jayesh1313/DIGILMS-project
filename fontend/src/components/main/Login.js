import React from "react";
import "../../stylesheet/Login.css";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Login() {
  const url = app_config.api_url;

  const userForm = {
    email: "",
    password: "",
  };

  const submituser = (formdata) => {
    console.log(formdata);

    fetch(url + "/user/add", {
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
          text: "user Added Successfully",
        });
      });
  };

  return (
    <div class="back2">
      <div class="login-box1">
        <h2>Login</h2>

        <Formik initialValues={userForm} onSubmit={submituser}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              

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
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <label>Password</label>
              </div>
              
              <Button variant="contained" type="sumbit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
