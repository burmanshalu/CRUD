import React from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar =() =>{

return(<nav className="navbar navbar-expand-lg navbar- bg-dark">
<div className="container">
  
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/details">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/about">
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/contact">
          Contact
        </NavLink>
         </li>  
    </ul>
  </div>
  <Link className="btn btn-outline-success" exact to ="/" >Logout</Link>
  <Link className="btn btn-outline-success" exact to ="/user/add" >Add User</Link>
</div>
</nav>


    
)

}

export default Navbar