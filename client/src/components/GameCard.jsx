import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;
import '../assets/styles/gameCard.css';

const GameCard = (props) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    const getGameInfo = () => {
        props.getGameInfo(props.game._id);
    };
    
    // const addUserGame = () => {
    //     let userGame = {
    //         score: 0,
    //         isWon: false,
    //         game: props.game,
    //     };
    //     props.addUserGame(userGame, props.game._id);
    // };


    return (
        <div>
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
                <Link to="/game" className="go-to-game">
                    <span onClick={getGameInfo}><p>Go to the game</p></span>
                </Link>
            </div>
        </div>
    );
};

export default GameCard;
