import React from 'react';
import GameCard from './GameCard';
import '../assets/styles/games.css';
export default function UserGames(props) {
    
    return (
        <div className="games">
            <h1>my games</h1>
            <p>Games take you to another world</p>
            <div className="games-container">
                {props.userGames.map((g, key) => (
                    <div className="game-card">
                        <GameCard
                            key={key}
                            userGame={g}
                            getGameInfo={props.getGameInfo}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
