import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Games from './Games';
import UserGames from './UserGames';
import Home from './Home';
import Navbar from './Navbar';
import '../assets/styles/landing.css';

const Landing = (props) => {
    return (
        <div className="landing">
            <Games games={props.games} getGameInfo={props.getGameInfo} />
        </div>
    );
};

export default Landing;
