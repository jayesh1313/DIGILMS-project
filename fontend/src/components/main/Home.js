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
              <li><a class="nav-link about" href="#t2"> <span id="a-about">About</span></a></li>
              <li><a class="nav-link work" href="#t3"> <span id="a-work">Work</span></a></li>
              <li><a class="nav-link contact" href="#t4"> <span id="a-contact">Contact</span></a></li>
            </ul>
          </nav>
          <section class="page" id="home"><i class="fa fa-home"></i>
            <p class="first">Orient Scholar.</p>
            <p class="second">Welcome back.</p>
          </section>
          <section class="page" id="about"><i class="fa fa-book"></i>
            <p>My Life was short but sweet</p>
          </section>
          <section class="page" id="work"><i class="fa fa-cogs"></i>
            <p>All work. All Play.</p>
          </section>
          <section class="page" id="contact"><i class="fa fa-twitter"></i>
            <p>@losslessdesign</p>
          </section>
        </main>
      </div>
    </div>
  </div>
</div>
        </div>


  )
}
