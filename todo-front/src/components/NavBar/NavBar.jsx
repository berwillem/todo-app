import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FaHome } from "react-icons/fa";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaNewspaper } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import "animate.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <NavLink to={""}>
            <li>
              <FaHome className="icon" />
            </li>
          </NavLink>
          <NavLink to={"/motivation"}>
            <li>
              <SiLevelsdotfyi className="icon" />
            </li>
          </NavLink>
          <NavLink to={"/blog"}>
            <li>
              <FaNewspaper className="icon" />
            </li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li>
              <FaPhoneAlt className="icon" />
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}
