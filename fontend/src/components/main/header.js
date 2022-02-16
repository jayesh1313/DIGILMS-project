import React from 'react'
import {  Link } from 'react-router-dom';
import '../../stylesheet/header.css'
const Header = () => {
  return (
    <div>
      <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      LMS
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <Link href="" target="_blank" to="/main/login">Login</Link>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
  </div>
</div>
      </div>
  )
}
export default Header;