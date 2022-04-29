import {
  Chat,
  Delete,
  Edit,
  ExpandMore,
  ExpandMoreSharp,
  ViewAgenda,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Fab,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import app_config from "../../config";

const EnrolledCourse = () => {
  const url = app_config.api_url;
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [menuPos, setMenuPos] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  console.log(currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    // fetchData();
  }, []);

  const displayData = () => {
    return currentUser.enrolled.map(
      (
        {
          title,
          Duration,
          isAdmin,
          pricing,
          trainer,
          description,
          category,
          prerequisites,
          username,
          _id,
          createdAt,
          thumbnail,
        },
        index
      ) => (
        <Accordion key={_id}>
          <AccordionSummary expandIcon={<ExpandMoreSharp />}>
            <Typography fontWeight={600}>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={10}>
              <Grid item md={6}>
                <h3>Course Details</h3>
                <hr className="mb-5" />
                <Grid container spacing={5}>
                  <Grid item xs={4}>
                    <img
                      className="w-100"
                      src={url + "/uploads/" + thumbnail}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <h4>{title}</h4>
                    <h4>{description}</h4>
                    in <h4>{category}</h4>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6}>
                <h3>Trainer Details</h3>
                <hr className="mb-5" />
                <Grid container spacing={5}>
                  <Grid item xs={4}>
                    {/* <img
                      className="w-100"
                      src={url + "/uploads/" + thumbnail}
                      alt=""
                    /> */}
                  </Grid>
                  <Grid item xs={8}>
                    <h4>Name : {trainer.fullname}</h4>
                    <h4> Qualification : {trainer.qualification}</h4>
                    <h4> Phone : {trainer.phone}</h4>
                    <h4> Experience : {trainer.exp}</h4>
                    <Fab
                      color="secondary"
                      sx={{ mt: 3 }}
                      variant="extended"
                      onClick={(e) => navigate("/user/chat/" + trainer._id)}
                    >
                      <Chat /> &nbsp; Chat
                    </Fab>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Fab
              color="primary"
              sx={{ mt: 3 }}
              onClick={(e) => navigate("/user/study/" + _id)}
            >
              <ViewAgenda />
            </Fab>
          </AccordionDetails>
        </Accordion>
      )
    );
  };

  return (
    <div className="enrolled-course">
      <Container>
        <Typography className="text-white" variant="h3">
          Your Enrolled Courses
        </Typography>
        <Divider sx={{ mb: 5, color: "#fff" }} />
        <Card>
          <CardContent>{displayData()}</CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default EnrolledCourse;
