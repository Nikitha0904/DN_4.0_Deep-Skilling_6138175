import React from 'react';
import './App.css';
import ListofPlayers from './ListofPlayers';
import { OddPlayers, EvenPlayers, ListofIndianPlayers } from './IndianPlayers';
import { IndianTeam } from './IndianPlayers';

// Data for the 'ListofPlayers' component
const players = [
  { name: 'Jack', score: 50 },
  { name: 'Michael', score: 70 },
  { name: 'John', score: 40 },
  { name: 'Ann', score: 61 },
  { name: 'Elisabeth', score: 61 },
  { name: 'Sachin', score: 95 },
  { name: 'Dhoni', score: 100 },
  { name: 'Virat', score: 84 },
  { name: 'Jadeja', score: 64 },
  { name: 'Raina', score: 75 },
  { name: 'Rohit', score: 80 },
];

function App() {
  // Set the flag to 'true' to show the ListofPlayers component
  // Set the flag to 'false' to show the IndianPlayers component
  const flag = false;

  if (flag === true) {
    const playersBelow70 = players.filter(player => player.score <= 70);
    return (
      <div className="App">
        <h1>List of Players</h1>
        <hr />
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <hr />
        <ListofPlayers players={playersBelow70} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Indian Team</h1>
        <hr />
        <h1>Odd Players</h1>
        <OddPlayers IndianTeam={IndianTeam} />
        <hr />
        <h1>Even Players</h1>
        <EvenPlayers IndianTeam={IndianTeam} />
        <hr />
        <h1>List of Indian Players Merged:</h1>
        <hr />
        <ListofIndianPlayers IndianPlayers={IndianTeam} />
      </div>
    );
  }
}

export default App;