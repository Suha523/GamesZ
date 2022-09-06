import React from 'react';
import {Link ,BrowserRouter as Router} from 'react-router-dom'
export default function JoinGame() {
    return (
     <div className  ="joinGame">
     <div>one player or multiplayer</div>
     <Link to='/ticTacToe'state='onePlayer'>1 player</Link>
     <Link to='/ticTacToe'>two player</Link>
     </div>
    );
  }