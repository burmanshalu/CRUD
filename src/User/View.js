import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios"


const View = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",

    });

    const { id } = useParams();
    useEffect(() => {
        loadUser();


    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data)

    }



    return (
        <div className="container">
            <Link className="btn btnprimary" to="/">back to home</Link>

            <h1 className="display-4"> User Id: </h1>
            <ul className="list-group w-50">

                <li className="list-gruop-item">name:{user.name}</li>
                <li className="list-gruop-item">user name:{user.username}</li>
                <li className="list-gruop-item">email:{user.email}</li>
                <li className="list-gruop-item">phone:{user.phone}</li>

            </ul>
        </div>
    );
}

export default View;
