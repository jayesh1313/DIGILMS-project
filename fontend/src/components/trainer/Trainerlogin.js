import React from "react";
import "../../stylesheet/Login.css";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
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
          text: "trainer Login Successfully",
        }).then(() => {
          navigate('/')
        })
      });
  };

  return (
    <div>
      <div class="login-box1">
        <h2>Login</h2>

        <Formik initialValues={trainerForm} onSubmit={submittrainer}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              

              <div class="trainer-box">
                <input
                  type="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <label>Email</label>
              </div>
            
              <div class="trainer-box">
                <input
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <label>Password</label>
              </div>
              
              <Button variant="contained" type="submit">
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
