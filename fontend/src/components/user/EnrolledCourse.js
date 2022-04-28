import { Delete, Edit, ExpandMore, ExpandMoreSharp } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Container,
  Fab,
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
        },
        index
      ) => (
        <Accordion key={_id}>
          <AccordionSummary expandIcon={<ExpandMoreSharp />}>
            <Typography fontWeight={600}>{username}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <h5> title: {title}</h5>
            <h5>Duration : {Duration}</h5>
            <h5>pricing : {pricing}</h5>
            <h5>trainer : {trainer}</h5>
            <h5>category : {category}</h5>
            <h5>prerequisites : {prerequisites}</h5>
            <h5>description : {description}</h5>
            <h5>isAdmin : {isAdmin ? "yes" : "no"}</h5>
            <h5>Created At : {new Date(createdAt).toLocaleDateString()}</h5>

            <Fab
              onClick={(e) => navigate("/user/study/" + _id)}
              variant="extended"
              sx={{ background: "red", color: "white" }}
            >
              <Edit /> View Course
            </Fab>
          </AccordionDetails>
        </Accordion>
      )
    );
  };

  return (
    <Container sx={{ marginTop: "5rem" }}>
      <Toaster />

      <Card>
        <CardContent>{displayData()}</CardContent>
      </Card>
    </Container>
  );
};

export default EnrolledCourse;
