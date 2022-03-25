import React from 'react'
import '../../stylesheet/AdminLogin.css'
 function AdminLogin() {
  return (
    <div>
       <body>
    <form>
      <div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
     <input type="email" name="Email" required=""/>
      <label>E-mail ID</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
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
    </form>
  </body>
    </div>
  )
}
export default AdminLogin;