import React, { useEffect, useState } from "react";
import axios from "axios"
  import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Edit a User</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Name</label>
            <input type="text" class="form-control" id="exampleInputPassword1"
              name="name"
              value={name}
              onChange={onInputChange} />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">User Name</label>
            <input type="text" class="form-control" id="exampleInputPassword1"
              name="username"
              value={username}
              onChange={onInputChange} />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={onInputChange} />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Phone</label>
            <input type="number" class="form-control" id="exampleInputPassword1"
              name="phone"
              value={phone}
              onChange={onInputChange} />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Website</label>
            <input type="text" class="form-control" id="exampleInputPassword1"
              name="website"
              value={website}
              onChange={onInputChange} />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;