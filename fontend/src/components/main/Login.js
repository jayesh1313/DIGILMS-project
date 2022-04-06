import React from "react";
import "../../stylesheet/Login.css";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FacebookLogin from 'react-facebook-login';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
export default function Login() {
  const url = app_config.api_url;

  const userForm = {
    email: "",
    password: "",
  };
  const responseGoogle = (response) => {
    console.log(response);
  }
  const responseFacebook = (response) => {
    console.log(response);
  }
  

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
    <div >
        <body class="text-center">
    
    <main class="form-signin">
    <Formik initialValues={userForm} onSubmit={submituser}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              {/* ReactDOM.render(
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton')
);
ReactDOM.render(
  <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    // onClick={componentClicked}
    callback={responseFacebook} />,
  document.getElementById('demo')
); */}

        <img class="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
        <h1 class="h3 mb-3 fw-normal">Student sign in</h1>
    
        <div class="form-floating">
          <input type="email" class="form-control" id="email"value={values.email}
                  onChange={handleChange}
 placeholder="name@example.com"/>
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control"                   id="password"
                  value={values.password}
                  onChange={handleChange}
 placeholder="Password"/>
          <label for="floatingPassword">Password</label>
        </div>
    
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
          )}
        </Formik>

    </main>
    
    
        
      </body>
    </div>
  );
}
