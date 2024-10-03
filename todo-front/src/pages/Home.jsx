import "../styles/Home.css";
import mainIcon from "./../assets/images/mainicon.gif";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  // const [content, setContent] = useState(null);

  // const myContent = () => {
  //   if (content === "login") {
  //     return (
  //       <div className="container-login">
  //         <h2>Login</h2>
  //         <form>
  //           <div>
  //             <label>Email:</label>
  //             <input type="email" required />
  //           </div>
  //           <div>
  //             <label>Password:</label>
  //             <input type="password" required />
  //           </div>
  //           <button type="submit">Login</button>
  //         </form>
  //       </div>
  //     );
  //   } else if (content === "register") {
  //     return (
  //       <div className="container-register">
  //         <h2>Register</h2>
  //         <form>
  //           <div>
  //             <label>Email:</label>
  //             <input type="email" required />
  //           </div>
  //           <div>
  //             <label>Password:</label>
  //             <input type="password" required />
  //           </div>
  //           <button type="submit">Register</button>
  //         </form>
  //       </div>
  //     );
  //   } else {
  //     return (

  //     );
  //   }
  // };

  return (
    <div className="top-page">
      <div className="intro">
        <img src={mainIcon} alt="main-icon" className="mainIcon" />
      </div>
      <h2 className="slogan">
        {" "}
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          pariatur adipisci nostrum illum, iusto ipsa nobis enim nisi tenetur
          debitis!
        </p>
        <button
          className="register"
          onClick={() => setContent("register")}
          style={{ textAlign: "center" }}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
