import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Fab,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { Delete, ExpandMore } from "@mui/icons-material";

function TrainerManager() {
  const url = app_config.api_url;

  const [trainerList, setTrainerList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrainers = () => {
    setLoading(true);
    fetch(url + "/trainer/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTrainerList(data);
        setLoading(false);
      });
  };

  const deleteTrainer = (id) => {
    fetch(url + "/trainer/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchTrainers();
      });
  };

  useEffect(() => {
    fetchTrainers();
  }, []);

  const displayTrainers = () => {
    return trainerList.map((trainer) => (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Grid container spacing={10}>
            <Grid item md={6}>
              <Typography variant="h6" fontWeight={700}>
                {trainer.fullname}
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant="subtitle1">{trainer.email}</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item md={4}>
              <p>Email</p>
              <p>Phone</p>
              <p>Password</p>
              <p>Experience</p>
            </Grid>
            <Grid item md={8}>
              <p>{trainer.email}</p>
              <p>{trainer.phone}</p>
              <p>{trainer.password}</p>
              <p>{trainer.exp}</p>
            </Grid>
          </Grid>
          <Fab
            color="secondary"
            aria-label="delete"
            className="float-end"
            onClick={(e) => deleteTrainer(trainer._id)}
          >
            <Delete />
          </Fab>
        </AccordionDetails>
      </Accordion>
    ));
  };

  // qualification: String,
  // design: String,
  // createdAt: { type: Date, default: new Date() },
  // thumbnail: String,

  return <Container>{displayTrainers()}</Container>;
}
export default TrainerManager;
