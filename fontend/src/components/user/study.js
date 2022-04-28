import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app_config from "../../config";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

const Study = () => {
  const [video, setVideo] = useState("");
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentLecture, setCurrentLecture] = useState({});
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const url = app_config.api_url;

  const { id } = useParams();

  useEffect(() => {
    fetch(url + "/course/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourse(data);
        setLoading(false);
        setCurrentLecture(data.data.sections[0].lectures[0]);
        setVideo(data.data.sections[0].lectures[0].content);
      });
  }, []);

  const displayCourse = () => {
    if (!loading) {
      return (
        <div style={{ height: "54rem", overflowY: "auto" }}>
          {course.data.sections.map((section, index) => {
            return (
              <div>
                <div style={{ display: "block" }}>
                  <p className="mt-5">Description</p>
                  <p>
                    <b>{section.description}</b>
                  </p>
                  <hr />

                  {section.lectures.map((lecture, index) => {
                    return (
                      <div className="card">
                        <div className="card-body">
                          <p>
                            <b>
                              {"Lecture " + index + 1 + " : "}
                              {lecture.name}
                            </b>
                          </p>
                          <p className="mt-5">Description</p>
                          <p>
                            <b>{lecture.description}</b>
                          </p>
                          <hr />
                          <Button onClick={(e) => setVideo(lecture.content)}>
                            {" "}
                            View
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  const capturePlay = (e) => {
    console.log("hehe");
    if (e.target.duration / e.target.currentTime > 0.8) {
      fetch(url + "/user/update/" + currentUser._id, {
        method: "PUT",
        body: JSON.stringify({ points: currentUser.points + 50 }),
      }).then((res) => {
        if (res.status === 200) {
          console.log("points Added");
          res.json().then((data) => {
            sessionStorage.setItem("user", JSON.stringify(data));
          });
        }
      });
    }
  };

  const displayLecture = () => {
    if (!loading)
      return (
        <div>
          <h1 className="mt-5">{currentLecture.name}</h1>
          <h3 className="mt-3">{currentLecture.description}</h3>
        </div>
      );
  };

  const renderVideo = () => {
    if (video) {
      return (
        <video
          onPlaying={capturePlay}
          width={"100%"}
          src={url + "/uploads/" + video}
          controls
        ></video>
      );
    }
  };

  return (
    <div>
      <h1>Study Room</h1>
      <hr />

      <div className="row">
        <div className="col-md-8">
          {renderVideo()}
          {displayLecture()}
        </div>
        <div className="col-md-4">{displayCourse()}</div>
      </div>
    </div>
  );
};

export default Study;
