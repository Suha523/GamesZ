import React from "react";
import { useState, useEffect } from "react";
import Square from "./Square";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
export default function OffBoard() {
    const { width, height } = useWindowSize()
  const [squares, setsquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState("");
  const Patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const computer_turn = (index) => {
    let newSquares = [...squares];
    newSquares[index] = "o";
    setTimeout(() => setsquares(newSquares), 150);
    console.log("ahmad");
  };
  const winning_lines = (a, b, c) => {
    return Patterns.filter((squareIndexs) => {
      const squareValues = squareIndexs.map((index) => squares[index]);
      return (
        JSON.stringify([a, b, c].sort()) === JSON.stringify(squareValues.sort())
      );
    });
  };
  const chooseSquare = (index) => {
    if (!winner) {
      const isPlayerTurn =
        squares.filter((square) => square !== "").length % 2 === 0;
      if (isPlayerTurn) {
        let newSquares = [...squares];
        newSquares[index] = "x";
        setsquares(newSquares);
      }
    }
  };
  useEffect(() => {
    let isComputerTurn =
      squares.filter((square) => square !== "").length % 2 === 1;
    const playerWon = winning_lines("x", "x", "x").length > 0;
    const computerWon = winning_lines("o", "o", "o").length > 0;
    if (playerWon || computerWon) isComputerTurn = false;
    if (playerWon) {
      setWinner("x");
    }
    if (computerWon) {
      setWinner("o");
    }
    if (isComputerTurn) {
      const winBlock1 = winning_lines("x", "x", "");
      if (winBlock1.length > 0) {
        const blockIndex = winBlock1[0].filter(
          (index) => squares[index] === ""
        )[0];
        computer_turn(blockIndex);
        return;
      }
      const winBlock2 = winning_lines("o", "o", "");
      if (winBlock2.length > 0) {
        const blockIndex = winBlock2[0].filter(
          (index) => squares[index] === ""
        )[0];
        computer_turn(blockIndex);
        return;
      }
      const winBlock3 = winning_lines("o", "", "");
      if (winBlock3.length > 0) {
        const blockIndex = winBlock3[0].filter(
          (index) => squares[index] === ""
        )[0];
        computer_turn(blockIndex);
        return;
      }
      const emptyIndexs = squares
        .map((square, index) => (square === "" ? index : ""))
        .filter((val) => val != "");
      const randomIndex =
        emptyIndexs[Math.ceil(Math.random() * emptyIndexs.length)];
      computer_turn(randomIndex);
    }
  }, [squares]);
  return (
    <div>
      <div className="board-container">
        <div className="row">
          <Square
            chooseSquare={() => chooseSquare(0)}
           value={squares[0]}
          />
          <Square
            chooseSquare={() => chooseSquare(1)}
            value={squares[1]}
          />
          <Square
            chooseSquare={() => chooseSquare(2)}
            value={squares[2]}
          />
        </div>
        <div className="row">
          <Square
            chooseSquare={() => chooseSquare(3)}
            value={squares[3]}
          />
          <Square
            chooseSquare={() => chooseSquare(4)}
            value={squares[4]}
          />
          <Square
            chooseSquare={() => chooseSquare(5)}
            value={squares[5]}
          />
        </div>
        <div className="row">
          <Square
            chooseSquare={() => chooseSquare(6)}
            value={squares[6]}
          />
          <Square
            chooseSquare={() => chooseSquare(7)}
            value={squares[7]}
          />
          <Square
            chooseSquare={() => chooseSquare(8)}
            value={squares[8]}
          />
        </div>
      </div>
      {winner && winner === "x" ? (
        <div>you won</div>
      ) : winner && winner === "o" ? (
        <div>you lost</div>
      ) : null}
       {winner ? <Confetti
      width={width}
      height={height}
    />:null}
    </div>
  );
       }









