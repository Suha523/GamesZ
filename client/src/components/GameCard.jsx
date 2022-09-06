import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;
import '../assets/styles/gameCard.css'

const GameCard = (props) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    const getGameInfo = () => {
        props.getGameInfo(props.game._id);
    };

    return (
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
                <Link to="/game">
                    <span onClick={getGameInfo}>Go to the game</span>
                </Link>
            </div>
        </div>
    );
};

export default GameCard;
