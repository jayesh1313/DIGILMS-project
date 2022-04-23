import React from 'react'
// import app_config from '../../config'

import '../../stylesheet/Home.css'
export default function Home() {

  // const url = app_config.api_url;
  return (
    <div className='body1'>

<div class="ct" id="t1">
  <div class="ct" id="t2">
    <div class="ct" id="t3">
      <div class="ct" id="t4">
        <main> 
          <nav>
            <ul>
              <li><a class="nav-link" href="#t1"> <span id="a-home">Home</span></a></li>
              <li><a class="nav-link about" href="#t2"> <span id="a-about">About Us</span></a></li>
              <li><a class="nav-link work" href="#t3"> <span id="a-work">Work</span></a></li>
              <li><a class="nav-link contact" href="#t4"> <span id="a-contact">Contact Us</span></a></li>
            </ul>
          </nav>
          <section class="page" id="home"><i class="fa fa-home"></i>
            <p class="first">Orient Scholar.</p>
            <p class="second">Welcome back.</p>
          </section>
          <section class="page" id="about"><i class="fa fa-book"></i>
            <p>We have a lot of platforms that provide education through internet but we have a different vision. Our goal is to provide a platform for those who aspire to excel in very distinguish and unique computer science’s fields. This project allowed us and our team to do a lot of research on the current education crisis especially in our nation. So we worked out many solutions and decided that a little specific and organized solution will be a better choice.
So we decided to make this platform to provide a competitive and a dynamic platform to those who can barely get their hands on good quality education. This will not only improve the literacy rate but will also allow in better generation of employment and new era of tech throughout the nation.
We are a team of students who have been through similar problems and dealt with hassles of a student’s life in our own ways. We wanted to make things a little easier for fellow students and extend an arm of help towards the society and our education system.
Our platform is an ever changing platform for thriving and aspiring techies and our sources are very reliable and verified helping students and promoting trust in all possible ways.
</p>
          </section>
          <section class="page" id="work"><i class="fa fa-cogs"></i>
            <p>All work. All Play.</p>
          </section>
          <section class="page" id="contact"><i class="fa fa-twitter"></i>
            <p>feedback.orientscholars@gmail.com</p> <br></br>
            <div className='body2'>
            <ul class="wrapper">
  <li class="icon facebook">
    <span class="tooltip">Facebook</span>
    <span><i class="fab fa-facebook-f"></i></span>
  </li>
  <li class="icon twitter">
    <span class="tooltip">Twitter</span>
    <span><i class="fab fa-twitter"></i></span>
  </li>
  <li class="icon instagram">
    <span class="tooltip">Instagram</span>
    <span><i class="fab fa-instagram"></i></span>
  </li>
  
</ul>
</div>
          </section>
        </main>
      </div>
    </div>
  </div>
</div>
        </div>


  )
}
