import React from 'react'
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { RiTodoLine } from "react-icons/ri";
import { FaNewspaper } from "react-icons/fa";

export default function Navbar2() {
    
  return (
    <div>
        <nav>
        <ul>
          <li>
            <Link to="/admin/:id">
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
    </div>
  )
}
