import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });


const [data,setData]=useState([])











  const getdata = (e) => {
    const { value, name } = e.target;
    console.log(value, name);

    setInpval(() => {
      return { ...inpval, [name]: value };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    console.log(inpval);
    const { name, email, date, password } = inpval;

    if (name === "") {
        alert("Name field is required");
      } else if (email === "") {
        alert("Email is required");
      } else if (!email.includes("@")) {
        alert("Please enter a valid email address");
      } else if (date === "") {
        alert("Date field is required");
      } else if (password.length < 5) {
        alert("Password should be at least 5 characters long");
      } else {
        console.log("data added succesfully")
localStorage.setItem("userdeatils",JSON.stringify([...data,inpval]))

      }
      
    
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Sign up</h1>
        <form onSubmit={addData}>
          <div className="mb-3 col-lg-4">
            <input
              type="text"
              name="name"
              onChange={getdata}
              className="form-control"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3 col-lg-4">
            <input
              type="email"
              name="email"
              onChange={getdata}
              className="form-control"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-3 col-lg-4">
            <input
              type="date"
              name="date"
              onChange={getdata}
              className="form-control"
              placeholder="date"
            />
          </div>
          <div className="mb-3 col-lg-4">
            <input
              type="password"
              name="password"
              onChange={getdata}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <p>
            Already Have An Account <span><NavLink to="/login">SignIn</NavLink></span>
          </p>
          <div className="right_data">
            <div className="sign_img">
              <img src="" alt="" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mb-3 col-lg-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
