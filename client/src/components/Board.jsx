import React from 'react';
import { useState, useEffect } from 'react';
import Chat from './Chat';
import Square from './Square';
import '../assets/styles/board.css';
export default function Board({ socket, user, room, result, setResult }) {
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
    const [player, setPlayer] = useState('X');
    const [turn, setTurn] = useState('X');
    const [isWinner, setWinner] = useState(false);
    const [flag, setFlag] = useState(true);
    const restart = () => {
        setBoard(['', '', '', '', '', '', '', '', '']);
        setTurn('X');
    };
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
    useEffect(() => {
        checkIfTie();
        checkWin();
    }, [board]);
    const checkWin = () => {
        Patterns.forEach((currPattern) => {
            const firstPlayer = board[currPattern[0]];
            if (firstPlayer == '') return;
            let foundWinningPattern = true;
            currPattern.forEach((index) => {
                if (board[index] != firstPlayer) {
                    foundWinningPattern = false;
                }
            });

            if (foundWinningPattern) {
                if (board[currPattern[0]] == 'X')
                    setResult({ winner: result.player1, state: 'won' });
                else setResult({ winner: result.player2, state: 'won' });
            }
        });
    };

    const checkIfTie = () => {
        let filled = true;
        board.forEach((square) => {
            if (square == '') {
                filled = false;
            }
        });

        if (filled) {
            setResult({ winner: 'none', state: 'tie' });
        }
    };
    const chooseSquare = async (square) => {
        const messageData = {
            room: room,
            author: user,
            message: { square, player },
        };
        if (player === turn && board[square] === '') {
            await socket.emit('sendSquare', messageData);
            setTurn(player === 'X' ? 'O' : 'X');
            setBoard(
                board.map((b, index) => {
                    if (index == square && b == '') return player;
                    return b;
                })
            );
        }
    };
    socket.on('receive_square', (data) => {
        const currentPlayer = data.message.player == 'X' ? 'O' : 'X';
        setPlayer(currentPlayer);
        setTurn(currentPlayer);
        if (flag) {
            if (board.indexOf('X') == -1)
                setResult({
                    winner: 'none',
                    player1: data.author,
                    player2: user,
                    state: 'none',
                });
            else
                setResult({
                    winner: 'none',
                    player1: user,
                    state: 'none',
                    player2: data.author,
                });
            setFlag(false);
        }
        setBoard(
            board.map((b, index) => {
                if (index == data.message.square && b == '')
                    return data.message.player;
                return b;
            })
        );
    });

    return (
        <div className="gameAndChat">
            <div className="board-container">
                <div className="row">
                    <Square
                        chooseSquare={() => chooseSquare(0)}
                        value={board[0]}
                    />
                    <Square
                        chooseSquare={() => chooseSquare(1)}
                        value={board[1]}
                    />
                    <Square
                        chooseSquare={() => chooseSquare(2)}
                        value={board[2]}
                    />
                </div>
                <div className="row">
                    <Square
                        chooseSquare={() => chooseSquare(3)}
                        value={board[3]}
                    />
                    <Square
                        chooseSquare={() => chooseSquare(4)}
                        value={board[4]}
                    />
                    <Square
                        chooseSquare={() => chooseSquare(5)}
                        value={board[5]}
                    />
                </div>
                <div className="row">
                    <Square
                        chooseSquare={() => chooseSquare(6)}
                        value={board[6]}
                    />
                    <Square
                        chooseSquare={() => chooseSquare(7)}
                        value={board[7]}
                    />
                    <Square
                        chooseSquare={() => chooseSquare(8)}
                        value={board[8]}
                    />
                </div>
            </div>
            {isWinner ? (
                <button onClick={restart}>restart the game</button>
            ) : null}
            <Chat socket={socket} user={user} room={room} />
        </div>
    );
}
