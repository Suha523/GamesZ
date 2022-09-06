import React from 'react';
import {Link ,BrowserRouter as Router} from 'react-router-dom'
export default function JoinGame() {
  if(!sessionStorage['userName'])
  window.location.href = "http://localhost:3000/login";
    return (
     <div className  ="joinGame">
     <div>one player or multiplayer</div>
     <Link to='/ticTacToe'state='onePlayer'>1 player</Link>
     <Link to='/room'>two player</Link>
     </div>
    );
  }