import React from 'react'
import '../../stylesheet/signup.css'
export default function signup() {
  return (
    <div className='sing'>
      <div class="login-box">
  <h2>Register</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Password</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Re-Password</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Contact Number</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Re-Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
    </div>
  )
}
