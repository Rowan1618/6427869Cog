
import React from "react";

const IndianPlayers = () => {
  const players = ["Virat", "Rohit", "Dhoni", "Bumrah", "Jadeja", "Shami"];

  const oddTeam = players.filter((_, index) => index % 2 !== 0);
  const evenTeam = players.filter((_, index) => index % 2 === 0);

  const [t1, t2, t3] = oddTeam;
  const [e1, e2, e3] = evenTeam;

  const T20players = ["Surya", "Ishan"];
  const RanjiTrophy = ["Pujara", "Rahane"];

  const allPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players (Destructured)</h2>
      <ul>
        <li>{t1}</li>
        <li>{t2}</li>
        <li>{t3}</li>
      </ul>
      <h2>Even Team Players (Destructured)</h2>
      <ul>
        <li>{e1}</li>
        <li>{e2}</li>
        <li>{e3}</li>
      </ul>
      <h2>Merged Player List</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
