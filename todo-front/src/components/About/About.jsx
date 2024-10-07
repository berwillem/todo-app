import React from "react";
import todopic2 from "../../assets/images/todopic2.webp";
import bluebg from "../../assets/images/bluebg.png";
import "./About.css";


const App = () => {
  return (
    <div className="container">
      <div className="div1">
        <img className="image" src={bluebg} alt="Rotating" />
      </div>
      <div className="div2">
        <img className="image" src={todopic2} alt="Rotating" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi
        ipsam, error dolor iusto nulla culpa temporibus aspernatur mollitia
        beatae fugiat dolore excepturi eligendi assumenda. Non tempora quis
        minus dolore?
      </p>
      <button className="styled-button">
        Click Here !
      </button>
    </div>
  );
};

export default App;
