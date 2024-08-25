import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 0,
    player: { name: "Placeholder", highscore: 0 },
  });

  const handleClick = () => {
    setGame({
      ...game,
      id: 1,
      player: { ...game.player, name: "Elizablobs", highscore: 69 },
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Load Player Data
      </button>
      {game.id} {game.player.name} {game.player.highscore}
    </div>
  );
}

export default App;
