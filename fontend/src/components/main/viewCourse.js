import {
  Chip,
  Card,
  CardContent,
  Backdrop,
  CircularProgress,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import { createRef, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ExpandMore } from "@mui/icons-material";
import app_config from "../../config";
import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: "#fff",
//   },
//   image: {
//     margin: "auto",
//   },
// }));

const ViewCourse = () => {
  //   const classes = useStyles();
  const [courseDetail, setCourseDetail] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const wrapper = createRef();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const url = app_config.api_url;

  const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    fetch(url + "/course/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourseDetail(data);
        setLoading(false);
      });
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handlePurchase = () => {
    console.log(courseDetail);
    sessionStorage.setItem("course", JSON.stringify(courseDetail));

    fetch(url + "/user/pushupdate/" + currentUser._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseDetail),
    }).then((response) => response.json());
    // navigate.push("/user/checkout");
  };

  if (courseDetail) {
    return (
      <div className="col-md-10 mx-auto">
        <h1>Course Details</h1>

        <div className="row">
          <div className="col-md-8">
            <Card>
              <CardContent>
                <div className="row">
                  <div className="col-md-4">
                    <h4>Course Name : </h4>
                    <p>{courseDetail.title}</p>
                  </div>
                  <div className="col-md-4">
                    <h4>Description : </h4>
                    <p>{courseDetail.description}</p>
                  </div>
                  <div className="col-md-4">
                    <h4>Duration : </h4>
                    <p>{courseDetail.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <CardContent>
                <h2>Rs. 4500/-</h2>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handlePurchase}
                >
                  Purchase
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mt-5">
          <CardContent>
            {courseDetail.data.sections.map((section, sect_i) => (
              <div
                style={{
                  padding: "2rem",
                  border: "1px solid gray",
                  background: "grey",
                  marginTop: "1rem",
                }}
                key={sect_i}
              >
                <h3>
                  Section {`${sect_i + 1}: `}
                  {section.name}
                </h3>
                {section.description}
                {section.lectures.map((lecture, lect_i) => (
                  <Accordion key={lect_i} ref={wrapper}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <h4>
                        Lecture {`${lect_i + 1}: `}
                        {lecture.name}
                      </h4>
                    </AccordionSummary>
                    <AccordionDetails>{lecture.description}</AccordionDetails>

                    <AccordionActions></AccordionActions>
                  </Accordion>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>
        <Backdrop
          ref={wrapper}
          //   className={classes.backdrop}
          open={loading}
          onClick={() => {
            setLoading(false);
          }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  } else {
    return <div>Nothing Here</div>;
  }
};

export default ViewCourse;
