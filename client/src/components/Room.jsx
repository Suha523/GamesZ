import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/room.css';
export default function Room({ setUser, setRoom, user, room, joinRoom }) {
    return (
        <div className="room">
            <h3>Join A Room</h3>
            <div className="inputs">
                <input
                    type="text"
                    placeholder="username..."
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="room id..."
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                />
            </div>
            <Link to="/ticTacToe">
                {' '}
                <button onClick={joinRoom} className="join-btn">
                    Join a room
                </button>
            </Link>
        </div>
    );
}
