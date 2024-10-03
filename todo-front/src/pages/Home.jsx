import "../styles/Home.css";
import mainIcon from "./../assets/images/mainIcon.gif";
export default function Home() {
  return (
    <div className="top-page">
      {/* <div className="register">
        <h1>
          Welcome to <br />Todo App
        </h1>
        <h3>
          Create, <br/>organize, <br />and prioritize <br />your tasks <br />with ease
        </h3>
        <button className="registerButton">Register Now</button>
      </div> */}
      <div className="intro">
        <img src={mainIcon} alt="main-icon" className="mainIcon" />
        <h2 className="slogan">
          JUST DO IT
        </h2>
      </div>
      <div className="info">
          <button className="login">
            Login
          </button>
          <button className="register">
            Register Now
          </button>
      </div>
    </div>
  );
}
