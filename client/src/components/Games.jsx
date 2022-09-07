import React from 'react';
import GameCard from '../components/GameCard';
import '../assets/styles/games.css';
export default function Games(props) {
    return (
        <div className="games">
            <h1>games</h1>
            <p>Games take you to another world</p>
            <div className="games-container">
                {props.games.map((g, key) => (
                    <div className="game-card">
                        <GameCard
                            key={key}
                            game={g}
                            getGameInfo={props.getGameInfo}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
