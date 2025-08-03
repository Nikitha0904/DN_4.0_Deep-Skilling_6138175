import React from 'react';

const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
export const IndianTeam = [...T20Players, ...RanjiTrophyPlayers];

export const OddPlayers = ({ IndianTeam }) => {
  const [first, , third, , fifth] = IndianTeam;

  return (
    <div>
      <ul>
        <li>First: {first}</li>
        <li>Third: {third}</li>
        <li>Fifth: {fifth}</li>
      </ul>
    </div>
  );
};

// Component to display even players using array destructuring
export const EvenPlayers = ({ IndianTeam }) => {
  // Destructuring to get the second, fourth, and sixth players (indices 1, 3, 5)
  const [, second, , fourth, , sixth] = IndianTeam;

  return (
    <div>
      <ul>
        <li>Second: {second}</li>
        <li>Fourth: {fourth}</li>
        <li>Sixth: {sixth}</li>
      </ul>
    </div>
  );
};

// Component to display the merged list of Indian players
export const ListofIndianPlayers = ({ IndianPlayers }) => {
  return (
    <ul>
      {IndianPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </ul>
  );
};