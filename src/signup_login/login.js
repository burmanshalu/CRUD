import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  const getuserArr = JSON.parse(localStorage.getItem("userdeatils")) || [];

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addData = (e) => {
    e.preventDefault();
    const { email, password } = inpval;

    if (email === "") {
      alert("Email is required");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address");
    } else if (password === "") {
      alert("Password is required");
    } else if (password.length < 5) {
      alert("Password should be at least 5 characters long");
    } else {
      const userlogin = getuserArr.find(
        (el) => el.email === email && el.password === password
      );

      if (userlogin) {
        // Successful login, navigate to "/details"
        history("/details");
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Sign In</h1>
        <form onSubmit={addData}>
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
              type="password"
              name="password"
              onChange={getdata}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <p>
            Already Have An Account{" "}
            <span>
              <NavLink to="/">Signup</NavLink>{" "}
            </span>
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

export default Login;
