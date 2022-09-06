import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Room({ setUser, setRoom,user,room,joinRoom }) {

    return (

        <div>
            
            <h3>Join A Chat</h3>
            <input
                type="text"
                placeholder="zain..."
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <input
                type="text"
                placeholder="room id..."
                value={room}
                onChange={(e) => setRoom(e.target.value)}
            />
           <Link to='/ticTacToe'> <button onClick={joinRoom}>Join a room</button></Link>
        </div>
    );
}
