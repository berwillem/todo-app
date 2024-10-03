import "../styles/Home.css";
import mainIcon from "./../assets/images/mainIcon.gif";
export default function Home() {
  return (
    <div>
      <div className="intro">
        <img src={mainIcon} alt="main-icon" className="mainIcon" />
      </div>
    </div>
  );
}
