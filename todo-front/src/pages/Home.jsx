import { useState } from "react";
import "../styles/Home.css";
import mainIcon from "./../assets/images/mainIcon.gif";

export default function Home() {

  const [content, setContent] = useState(null);


  const myContent = () => {
    if (content === "login") {
      return (
        <div className="container-login">
          <h2>Login</h2>
          <form>
            <div>
              <label>Email:</label>
              <input type="email" required />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" required />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      );
    } else if (content === "register") {
      return (
        <div className="container-register">
          <h2>Register</h2>
          <form>
            {/* <div>
              <label>Username:</label>
              <input type="text" required />
            </div> */}
            <div>
              <label>Email:</label>
              <input type="email" required />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" required />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      );
    } else {
      return <img src={mainIcon} alt="main-icon" className="mainIcon" />;
    }
  };

  return (
    <div className="container">
      <div className="register">
        <button onClick={() => setContent("register")} style={{textAlign:'center'}}>Register</button>
      </div>
      <div className="intro">
        
        {myContent()}
      </div>
      <div className="login">
        <button onClick={() => setContent("login")}>Login</button>
      </div>
    </div>
  );
}
