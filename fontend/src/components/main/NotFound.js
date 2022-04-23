import React from 'react'
import { Link } from "react-router-dom";
import '../../stylesheet/NotFound.css'
export default function NotFound() {
    
  return (
    <div >
        
        <div class="page-notfound">
  <div class="content-notfound">
    <div class="title">404</div>
    <strong>Oops! Page not found</strong>
    <p>The page you are looking for was moved, removed, renamed or might never exist.</p>
    <Link href="#" class="links-home" to="/main/Home">Go home</Link>
  </div>
</div>  
    </div>
  )
}
