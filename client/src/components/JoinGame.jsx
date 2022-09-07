import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import '../assets/styles/joinGame.css';
export default function JoinGame() {
    if (!sessionStorage['userName'])
        window.location.href = 'http://localhost:3000/login';
    return (
        <div className="joinGame">
            <h2>one player or multiplayer? </h2>
            <div className="options">
                <Link to="/ticTacToe" state="onePlayer" className="link">
                    <div className="option">
                        <i className="fa-solid fa-arrow-right"></i> one player
                    </div>
                </Link>
                <Link to="/room" className="link">
                    <div className="option">
                        <i className="fa-solid fa-arrow-right"></i> two players
                    </div>
                </Link>
            </div>
        </div>
    );
}
