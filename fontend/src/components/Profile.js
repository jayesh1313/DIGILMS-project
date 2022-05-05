import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  makeStyles,
  TextField,
} from "@mui/material";
import clsx from "clsx";
import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../config";

const Profile = (props) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [updateForm, setUpdateForm] = useState({});
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const url = app_config.api_url + "/";

  useEffect(() => {
    fetch(url + "/user/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpdateForm(data);
      });
  }, []);

  const onFormSubmit = (value, { setSubmitting }) => {
    fetch(url + "/user/update/" + currentUser._id, {
      method: "PUT",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200)
        Swal.fire({
          icon: "success",
          title: "Welldone!",
          text: "You have successfully Updated",
        });
    });
  };

  return (
    <div className="col-md-10 mx-auto">
      <Card className="mt-5">
        <CardContent>
          <div className="row">
            <h3 className="text-center">Manage Profile</h3>
            <div className="col-md-4">
              <img src={url + currentUser.avatar} className="img-fluid" />
            </div>
            <div className="col-md-8">
              <Formik
                enableReinitialize={true}
                initialValues={currentUser}
                onSubmit={onFormSubmit}
              >
                {({ values, handleChange, handleSubmit, isSubmitting }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      label="Full Name"
                      variant="filled"
                      name="fullname"
                      className="mt-5"
                      onChange={handleChange}
                      value={values.fullname}
                    />
                    <TextField
                      label="Email"
                      variant="filled"
                      name="email"
                      className="mt-5"
                      onChange={handleChange}
                      value={values.email}
                    />
                    <TextField
                      label="Age"
                      variant="filled"
                      name="age"
                      className="mt-5"
                      onChange={handleChange}
                      value={values.age}
                    />
                    <TextField
                      type="password"
                      label="Password"
                      name="password"
                      variant="filled"
                      className="mt-5"
                      onChange={handleChange}
                      value={values.password}
                    />

                    <div className="text-center">
                      <button className="btn btn-primary mt-5 w-100">
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
