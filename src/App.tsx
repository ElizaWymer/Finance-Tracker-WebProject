import { useState } from "react";

function App() {
  const [moods, setMood] = useState(["Happy", "Sad", "Angry"]);

  const handleClick = () => {
    setMood([...moods, "Fear"]);
    console.log([...moods, "Fear"]);
    setMood(moods.filter((mood) => mood !== "Angry"));
    console.log(moods.filter((mood) => mood !== "Angry"));
    setMood(moods.map((mood) => (mood === "Happy" ? "Joy" : mood)));
    console.log(moods.map((mood) => (mood === "Happy" ? "Joy" : mood)));
  };

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      ></button>
    </div>
  );
}

export default App;
