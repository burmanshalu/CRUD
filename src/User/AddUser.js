import React, { useState } from "react";
import axios from "axios"
// import {useHistory} from "react-router-dom"

const AddUser = ()=> {
    // let history =useHistory
const[user,setUser] =useState({
name : "",
username : "",
email : "",
phone : "" ,
website: "",})

const onInputChange = e => {
console.log(e.target.value)
setUser({...user,[e.target.name] : e.target.value})}


const onSubmit= async e=> {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user)
// history.push("/")



}


  return (
    <div className="container">
      <div className="py-4">
      <h1>Add User</h1> 



      <form onSubmit={e => onSubmit(e)}>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1"
    name="name"
    value = {user.name}
    onChange= {onInputChange}/>

  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">User Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1"
    name="username"
    value={user.username}
    onChange= {onInputChange}/>

  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
  name="email"
  value={user.email} 
    onChange= {onInputChange}/>


  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone</label>
    <input type="number" class="form-control" id="exampleInputPassword1"
     name="phone"
    value={user.phone}
    onChange= {onInputChange}/>


  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Website</label>
    <input type="text" class="form-control" id="exampleInputPassword1"
     name="website"
    value={user.website}
    onChange= {onInputChange}/>


  </div>




  <button type="submit" class="btn btn-primary">Submit</button>
</form>   
           
     </div>
     </div>
  );
}

export default AddUser;