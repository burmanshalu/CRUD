import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"


const Home = () => {
  const [users, setUser] = useState([]);


  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    console.log(result)
    setUser(result.data)
  }



  const handleDelete = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`)
    loadUsers()

  }

  useEffect(() => {
    loadUsers();

  }, []);


  return (
    <div className="container">
      <div className="py-4">


        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col"> Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          {/* <tbody>

            {

              users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link class="btn btn-outline-primary mr-2" to={`users/edit/${user.id}`}> Edit</Link>
                    <Link class="btn btn-dager" onClick={() => handleDelete(user.id)}> Delete</Link></td>
                </tr>

              )

              )}

          </tbody> */}







          <tbody>
            {users.map((user, index) => (
              <><tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td >

                  <Link class="btn btn-primary " to={`/users/${user.id}`}> View </Link>
                  <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>
                    Edit </Link>

                  <Link type="button" class="btn btn-danger" onClick={() => handleDelete(user.id)}> Delete</Link>


                </td>
              </tr>
              </>


            ))}
          </tbody >












        </table>

      </div>

    </div>
  );
}

export default Home;
