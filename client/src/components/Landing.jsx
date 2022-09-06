import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameCard from './GameCard';
import Games from './Games';
import Navbar from './Navbar';

const Landing = (props) => {
    return (
        <div className="landing">
            <Navbar />
            <Games games={props.games} getGameInfo={props.getGameInfo} />
        </div>
    );
};

export default Landing;
