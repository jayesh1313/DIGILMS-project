import React, { useEffect, useState } from "react";
import app_config from "../../config";

import "../../stylesheet/BrowseTrainer.css";

export default function BrowseCourse() {
  const url = app_config.api_url;

  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = () => {
    fetch(url + "/courses/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setCourseList(data);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const showCourses = () => {
    if (!loading) {
      return courseList.map((course) => (
        <div class="card">
          <div class="content">
            <h2 class="title">Web developer</h2>
            <p class="copy">Dr.Rahul</p>
            <button class="btn">View Course</button>
          </div>
        </div>
      ));
    }
  };

  return <div>{showCourses()}</div>;
}
