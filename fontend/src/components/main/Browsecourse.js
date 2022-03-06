import React, { useState } from 'react'
import app_config from '../../config';

import'../../stylesheet/BrowseTrainer.css';

export default function BrowseCourse() {
  const url = app_config.api_url;

  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true)



  const fetchCourses = () => {
      // fetch(ur)
  }

 
    return (
      <div>
      <div class="card">
    <div class="content">
      <h2 class="title">Web developer</h2>
      <p class="copy">Dr.Rahul</p>
      <button class="btn">View Course</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Machine Learning</h2>
      <p class="copy">Proff. Yash</p>
      <button class="btn">View Course</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Ethical HAcking</h2>
      <p class="copy">Dr. Ritik</p>
      <button class="btn">View Course</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Android developer</h2>
      <p class="copy">Dr. P.k</p>
      <button class="btn">View Course</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Web developer</h2>
      <p class="copy">Dr.Gaurav Taneja </p>
      <button class="btn">View Course</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Machine Learning</h2>
      <p class="copy">Proff. Yash</p>
      <button class="btn">View Course</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Ethical HAcking</h2>
      <p class="copy">Dr. Ritik</p>
      <button class="btn">View Course</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Android developer</h2>
      <p class="copy">Dr. P.k</p>
      <button class="btn">View Course</button>
    </div>
  </div>
  </div>

      
  )

}}
