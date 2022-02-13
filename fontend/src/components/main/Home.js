import React from 'react';
import '../../stylesheet/Home.css'
import { BrowserRouter, Link } from 'react-router-dom';
export default function Home() {
  return <div>
    <section class="hero">
  <header id="header">
    {/* <a id="logo" href="https://cdn-icons-png.flaticon.com/128/2000/2000920.png">logo</a> */}
    <nav>
      {/* <a id="menu-icon">&#8801;</a> */}
    </nav>
  </header>
  <header class="hero-header">
    <h1 class="hero-title">“Knowledge is power.”</h1>
  </header>
  <footer class="hero-footer">
    <Link class="button button-primary" href="#" to="/main/signup">Register</Link>
    <Link class="button" href="#" to="/main/Login">Login</Link>
  </footer>
</section>
<article>
  
</article>
  </div>;
}
