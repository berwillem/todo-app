import { useState, useRef, useEffect } from "react";
import "../styles/Home.css";
import mainIcon from "./../assets/images/mainicon.gif";
import { TypeAnimation } from "react-type-animation";
import logo from "./../assets/images/logo-todo-remove.png";
import vector from "./../assets/images/Vector.png";
import vector3 from "./../assets/images/Vectorpurpule.png";
import { FcTodoList } from "react-icons/fc";
import { LuListTodo } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false); 
  const [isLogin, setIsLogin] = useState(false); //pour afficher la popup login 
  const popupRef = useRef(null);

  const closePopup = () => {
    setShowPopup(false);
    setIsLogin(false); 
  };

  // Gère le clic en dehors de la popup 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className="top-page">
      {showPopup && (
        <div className="popup">
          <div className="popup-content" ref={popupRef}>
            <div className="container-image">
              <div className="logovector">
                <img src={logo} style={{ width: "95px", height: "95px" }} />
              </div>
              <div className="vector">
                <img src={vector} style={{ width: "250px", height: "110px" }} />
              </div>
              <div className="title-image">
                <h3>{isLogin ? "Welcome back" : "Join us today"}</h3>
              </div>
              <div className="subtitle-image">
                <p>{isLogin ? "Log in to your account" : "Create your account"}</p>
              </div>
           
              <div className="victorpurpule">
                <img src={vector3} />
              </div>
              <div className="victor1">
                <LuListTodo />
              </div>
              <div className="iconimage">
                <FcTodoList />
              </div>
            </div>
            
            {isLogin ? (
              <form>
                <div className="input-wrapper">
                  <MdOutlineEmail className="input-icon" />
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="input-wrapper">
                  <RiLockPasswordLine className="input-icon" />
                  <input type="password" placeholder="Password" required />
                </div>
                <button type="submit">Login</button>
                <p>
                  Don't have an account?{" "}
                  <span onClick={() => setIsLogin(false)} style={{ cursor: "pointer", color: "blue" }}>
                    Register here
                  </span>
                </p>
              </form>
            ) : (
              <form>
                <div className="input-wrapper">
                  <FaRegUser className="input-icon" />
                  <input type="text" placeholder="Full name" required />
                </div>
                <div className="input-wrapper">
                  <MdOutlineEmail className="input-icon" />
                  <input type="email" placeholder="Valid email" required />
                </div>
                <div className="input-wrapper">
                  <RiLockPasswordLine className="input-icon" />
                  <input type="password" placeholder="Strong password" required />
                </div>
                <button type="submit">Register</button>
                <p>
                  Already have an account?{" "}
                  <span onClick={() => setIsLogin(true)} style={{ cursor: "pointer", color: "blue" }}>
                    Login here
                  </span>
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      <div className="intro">
        <img src={mainIcon} alt="main-icon" className="mainIcon" />
      </div>

      <h2 className="slogan">
        <TypeAnimation
          sequence={["Just do it!", 1000, "Have fun!", 1000]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "2em",
            display: "inline-block",
            color: "var(--third-color)",
          }}
          repeat={Infinity}
        />
      </h2>

      <div className="info">
        <h1>Get Started</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          pariatur adipisci nostrum illum, iusto ipsa nobis enim nisi tenetur
          debitis!
        </p>
        <button className="register" onClick={() => setShowPopup(true)}>
          Register Now
        </button>
      </div>
    </div>
  );
}
