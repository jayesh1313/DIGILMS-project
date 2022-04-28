import { Button, Card, CardContent, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import clsx from "clsx";
import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: "10rem",
  },
}));

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      padding: "0.5rem",
      iconColor: "#c4f0ff",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "#87bbfd",
      },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const Checkout = (props) => {
  const styles = useStyles();

  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const url = app_config.api_url;

  const [courseDetails, setCourseDetails] = useState(
    JSON.parse(sessionStorage.getItem("course"))
  );
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [userForm, setUserForm] = useState({});

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(courseDetails);
    console.log(currentUser);
    const user = currentUser;
    user["address"] = "";
    setCurrentUser(user);
  }, []);

  const saveOrder = () => {
    fetch(url + "/user/pushupdate/" + currentUser._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enrolled: courseDetails._id }),
    }).then((res) => {
      console.log(res);

      Swal.fire({
        icon: "success",
        title: "Course Purchased",
        text: "You have Purchased sucessfully",
      }).then((d) => {
        sessionStorage.setItem("user", JSON.stringify(d));
        // navigate("/user/EnrolledCourse");
      });
    });
  };

  const getIntent = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: courseDetails.pricing * 100 }),
    };
    return fetch(url + "/create-payment-intent", requestOptions).then(
      (response) => response.json()
    );
  };

  const payMoney = async (e) => {
    e.preventDefault();
    getIntent().then((res) => {
      console.log(res);
      let clientSecret = res.client_secret;

      completePayment(clientSecret);
    });
  };

  const completePayment = async (key) => {
    const paymentResult = await stripe.confirmCardPayment(key, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser.name,
        },
      },
    });
    setPaymentLoading(false);
    if (paymentResult.error) {
      alert();
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: paymentResult.error.message,
      });
      console.log(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        console.log(paymentResult);
        saveOrder();
      }
    }
  };

  return (
    <div className="col-md-11 mx-auto">
      <Card className={clsx(styles)}>
        <CardContent>
          <h2 className="text-center">Order Checkout</h2>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <div className="product-details">
                <h3>Course Details</h3>
                <hr />

                {/* <div>
                  <img
                    className="img-fluid"
                    src={`${url}/${courseDetails.avatar}`}
                  />
                </div> */}

                <p className="detail-name mt-5">Course Name :</p>
                <p className="detail">{courseDetails.name}</p>

                <p className="detail-name mt-3">Description :</p>
                <p className="detail">{courseDetails.description}</p>

                <p className="detail-name mt-3">Price :</p>
                <p className="detail-price" style={{ fontSize: "3rem" }}>
                  {courseDetails.pricing}
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="user-details">
                <h3>User Details</h3>
                <hr />

                <Formik initialValues={currentUser}>
                  {({ values, handleChange, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                      {setUserForm(values)}
                      <TextField
                        className="mt-4 w-100"
                        id="fullname"
                        label="Fullname"
                        onChange={handleChange}
                        value={values.fullname}
                      />
                      <TextField
                        className="mt-4 w-100"
                        type="email"
                        id="email"
                        label="Email"
                        onChange={handleChange}
                        value={values.email}
                      />
                      <TextField
                        className="mt-4 w-100"
                        multiline
                        rows={5}
                        id="address"
                        label="Address"
                        onChange={handleChange}
                        value={values.address}
                      />
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>

          <div className="card-details mt-5 col-md-6 mx-auto">
            <form onSubmit={payMoney}>
              <div>
                <CardElement className="card" options={CARD_OPTIONS} />

                <Button
                  disabled={isPaymentLoading}
                  className="mt-5 w-100"
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  {isPaymentLoading
                    ? "Loading..."
                    : `Pay ₹${courseDetails.pricing}/-`}
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Checkout;
