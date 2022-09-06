import React from 'react'
import GameCard from '../components/GameCard'

export default function Games(props) {
  return (
    <div className="landing">
      <h1>games</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolores.
      </p>
      <div className="games-container">
          {props.games.map((g, key) => <GameCard key={key}  game={g} getGameInfo={props.getGameInfo}/>)}
      </div>
    </div>
  )
}
