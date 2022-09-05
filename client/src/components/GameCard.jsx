import React from 'react'
import { Link } from 'react-router-dom'

const GameCard = (props) => {
  return (
    <div className='game-card'>
        <div className='game-img'>
            <img alt='game' width='100%' height='100%' src={props.game.thumbnail}></img>
        </div>
        <div className='game-header'>
            <h2>{props.game.name}</h2>
            <p>{props.game.description}</p>
            <Link to='/game'>Go to the game</Link>
        </div>
    </div>
  )
}

export default GameCard