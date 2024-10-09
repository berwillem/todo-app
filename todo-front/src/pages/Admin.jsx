import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { RiTodoLine } from "react-icons/ri";
import { FaNewspaper } from "react-icons/fa";
import axios from "axios";

export default function Admin() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/user/${id}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`/admin/${id}`}>
              <FaRegUser className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/todo">
              <RiTodoLine className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/userblog">
              <FaNewspaper className="icon" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="profile">
        <h1>Bonjour, {userData?.username}</h1>
        <p>Email: {userData?.email}</p>
      </div>
    </div>
  );
}
