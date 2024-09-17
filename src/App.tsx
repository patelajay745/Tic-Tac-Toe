import { useState } from "react";
import "./App.css";
import { Block } from "./components/Block";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");

  const checkWinner = (state: string[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return true;
    }

    return false;
  };

  const handleBlockClick = (index: number) => {
    const stateCopy = Array.from(state);
    if (stateCopy[index] !== null) return;
    stateCopy[index] = currentTurn;

    setCurrentTurn(currentTurn === "X" ? "0" : "X");
    setState(stateCopy);

    //check if someone won
    const win = checkWinner(stateCopy);
    if (win) {
      currentTurn === "X" ? alert(`Player 1 won`) : alert(`Player 2 won`);
    }
  };

  return (
    <>
      <div className="board">
        <div className="row">
          <Block onClick={() => handleBlockClick(0)} value={state[0]} />
          <Block value={state[1]} onClick={() => handleBlockClick(1)} />
          <Block value={state[2]} onClick={() => handleBlockClick(2)} />
        </div>

        <div className="row">
          <Block value={state[3]} onClick={() => handleBlockClick(3)} />
          <Block value={state[4]} onClick={() => handleBlockClick(4)} />
          <Block value={state[5]} onClick={() => handleBlockClick(5)} />
        </div>

        <div className="row">
          <Block value={state[6]} onClick={() => handleBlockClick(6)} />
          <Block value={state[7]} onClick={() => handleBlockClick(7)} />
          <Block value={state[8]} onClick={() => handleBlockClick(8)} />
        </div>
      </div>
    </>
  );
}

export default App;
