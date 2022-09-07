import { axios } from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/gameInfo.css';

export default function GameInfo(props) {
    return (
        <div className="game-info">
            <div className="game-card">
                <div className="game-img">
                    <img
                        alt="game"
                        width="100%"
                        height="100%"
                        src={props.game.thumbnail}
                    ></img>
                </div>
                <div className="game-header">
                    <h2>{props.game.name}</h2>
                    <p>{props.game.description}</p>
                    <Link to="/joinGame" className="link">
                        <span>Join Game</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
