import { Delete, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Fab,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import app_config from "../../config";
import toast from "react-hot-toast";

const ManageCourses = () => {
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;

  const fetchData = () => {
    fetch(url + "/course/getall")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCourseList(data);
        setLoading(false);
      });
  };

  const deleteData = (id) => {
    fetch(url + "/course/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Course Deleted!");
        fetchData();
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayData = () => {
    if (!loading)
      return courseList.map(
        ({
          _id,
          title,
          category,
          createdAt,
          description,
          data,
          price,
          reviews,
        }) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h5>{title}</h5>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={5}>
                <Grid item md={4} sm={6}>
                  {/* <img src={} alt="" /> */}
                </Grid>
                <Grid item md={8} sm={6}></Grid>
              </Grid>
              <Fab
                onClick={(e) => deleteData(_id)}
                sx={{
                  background: "#f00",
                  color: "#fff",
                  // position: "absolute",
                  // bottom: 16,
                  // right: 16,
                }}
              >
                <Delete />
              </Fab>
            </AccordionDetails>
          </Accordion>
        )
      );
  };

  return <Container>{displayData()}</Container>;
};

export default ManageCourses;
