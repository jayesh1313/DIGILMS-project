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

  useEffect(() => {
    // fetchData();
  }, []);

  const displayData = () => {
    return userList.map(
      ({ created, email, isAdmin, password, username, _id }, index) => (
        <Accordion key={_id}>
          <AccordionSummary expandIcon={<ExpandMoreSharp />}>
            <Typography fontWeight={600}>{username}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <h5>Username : {username}</h5>
            <h5>Email : {email}</h5>
            <h5>Password : {password}</h5>
            <h5>isAdmin : {isAdmin ? "yes" : "no"}</h5>
            <h5>Created At : {new Date(created).toLocaleDateString()}</h5>

            <Fab
              onClick={(e) => setMenuPos(e.currentTarget)}
              variant="extended"
              sx={{ background: "red", color: "white" }}
            >
              <Delete /> Delete
            </Fab>
          </AccordionDetails>
        </Accordion>
      )
    );
  };

  return (
    <Container>
      <Toaster />

      <Card>
        <CardContent>{displayData()}</CardContent>
      </Card>
    </Container>
  );
};

export default EnrolledCourse;
