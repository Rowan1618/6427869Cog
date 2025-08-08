
import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 88 },
    { name: "Rohit", score: 92 },
    { name: "Dhoni", score: 65 },
    { name: "Bumrah", score: 45 },
    { name: "Jadeja", score: 75 },
    { name: "Shami", score: 62 },
    { name: "Rahul", score: 81 },
    { name: "Gill", score: 90 },
    { name: "Pandya", score: 55 },
    { name: "Kuldeep", score: 40 },
    { name: "Iyer", score: 70 }
  ];

  const filteredPlayers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>Players with Score ≥ 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
