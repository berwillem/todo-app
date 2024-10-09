import React from 'react';
import todopic2 from "../../assets/images/todopic2.webp";
import './About.css';  
import './Leaderboard.css';  

const Leaderboard = () => {  
  const players = [  
    { ranking: 1, name: 'amine1', matches: 5, killPoints: 20, playerPoints: 17, totalPoints: 9, wins: 3 },  
    { ranking: 2, name: 'amine2', matches: 5, killPoints: 20, playerPoints: 17, totalPoints: 9, wins: 3 },  
    { ranking: 3, name: 'amine3', matches: 5, killPoints: 20, playerPoints: 17, totalPoints: 9, wins: 3 },  
    { ranking: 4, name: 'amine4', matches: 5, killPoints: 20, playerPoints: 17, totalPoints: 9, wins: 3 },  
    { ranking: 5, name: 'amine5', matches: 5, killPoints: 20, playerPoints: 17, totalPoints: 9, wins: 3 },  
  ];  

  return (  
    <div className="leaderboard">  
      <h1>LEADERBOARD</h1>  
      <table>  
        <thead>  
          <tr>  
            <th>RANKING</th>  
            <th>TEAM</th>  
            <th>MATCHES</th>  
            <th>KILL POINTS</th>  
            <th>PLAYER POINTS</th>  
            <th>TOTAL POINTS</th>  
            <th>WIN</th>  
          </tr>  
        </thead>  
        <tbody>  
          {players.map(player => (  
            <tr key={player.ranking}>  
              <td>{player.ranking}</td>  
              <td>{player.name}</td>  
              <td>{player.matches}</td>  
              <td>{player.killPoints}</td>  
              <td>{player.playerPoints}</td>  
              <td>{player.totalPoints}</td>  
              <td>{player.wins}</td>  
            </tr>  
          ))}  
        </tbody>  
      </table>  
    </div>  
  );  
};

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

      <button className="styled-button">Click Here!</button>

      
      <Leaderboard />
    </div>
  );
};

export default App;
