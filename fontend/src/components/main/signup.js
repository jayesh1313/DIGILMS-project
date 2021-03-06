import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import app_config from "../../config";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();

  const formdata = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirm: "",
  };

  const url = app_config.api_url;

  const formSubmit = (formdata) => {
    console.log(formdata);

    const reqOptions = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/user/add", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Registered Successfully",
        });
        navigate("/main/Login");
      });
  };

  const layout = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    backgroundColor: "#cf9bff",
  };

  const brandName = (name) => {
    return (
      <p
        style={{
          color: "#555555",
          fontWeight: 700,
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        {name}
      </p>
    );
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("FullName is Required"),
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Username is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string()
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      // )
      .required("Password is Required"),
    confirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password Confirmation is Required"),
  });

  const uploadAvatar = (e) => {
    const file = e.target.files[0];
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: new FormData("myfile", file),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Paper style={layout}>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            {brandName("Digi LMS")}
            <Typography variant="h5" align="center">
              Join Now
            </Typography>
            <Formik
              initialValues={formdata}
              onSubmit={formSubmit}
              // validate={validate}
              validationSchema={validationSchema}
            >
              {({
                values,
                handleSubmit,
                handleChange,
                errors,
                touched,
                resetForm,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={5}>
                    <Grid item md={12} sm={12} xs={12} className="mt-5">
                      <TextField
                        label="Name"
                        id="name"
                        value={values.name}
                        onChange={handleChange}
                        type="text"
                        variant="outlined"
                        className="w-100"
                        error={Boolean(errors.name)}
                        helperText={errors.name}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={5}>
                    <Grid item md={6} sm={12} xs={12} className="mt-3">
                      <TextField
                        label="Username"
                        id="username"
                        value={values.username}
                        onChange={handleChange}
                        type="text"
                        variant="outlined"
                        className="w-100"
                        error={Boolean(errors.username)}
                        helperText={errors.username}
                      />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} className="mt-3">
                      <TextField
                        label="Email ID"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        type="email"
                        variant="outlined"
                        className="w-100"
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={5}>
                    <Grid item md={6} sm={12} xs={12} className="mt-3">
                      <TextField
                        label="Password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        type={passVisible ? "text" : "password"}
                        variant="outlined"
                        className="w-100"
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={(e) => {
                                  setPassVisible(!passVisible);
                                }}
                                edge="end"
                              >
                                {passVisible ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} className="mt-3">
                      <TextField
                        label="Re-Enter Password"
                        id="confirm"
                        value={values.confirm}
                        onChange={handleChange}
                        type={passVisible ? "text" : "password"}
                        variant="outlined"
                        className="w-100"
                        error={Boolean(errors.confirm)}
                        helperText={errors.confirm}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={(e) => {
                                  setPassVisible(!passVisible);
                                }}
                                edge="end"
                              >
                                {passVisible ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="w-100 mt-5"
                  >
                    Submit
                  </Button>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>
    </Paper>
  );
};

export default Signup;
