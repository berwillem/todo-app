import todopic2 from "../../assets/images/todopic2.webp";
import "./About.css";

const App = () => {
  return (
    <div className="container">
      <div className="image-background">
        <img className="about-image" src={todopic2} alt="Rotating" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi
        ipsam, error dolor iusto nulla culpa temporibus aspernatur mollitia
        beatae fugiat dolore excepturi eligendi assumenda. Non tempora quis
        minus dolore?
      </p>
      <button className="styled-button">Click Here !</button>
    </div>
  );
};

export default App;
