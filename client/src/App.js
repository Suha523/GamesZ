import './App.css';
import './components/component css/Login.css';
import io from 'socket.io-client';
import { useState, useEffect } from 'react';
import Chat from './components/Chat';
import Game from './components/Game';
import axios from 'axios';
import Landing from './components/Landing';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
axios.defaults.withCredentials = true;

const socket = io.connect('http://localhost:3002');

const App = () => {
    const [user, setUser] = useState('');
    const [room, setRoom] = useState('');

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    const [games, setGames] = useState([]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    useEffect(() => {
        axios.get('http://localhost:4001/games').then((response) => {
            setGames(response.data);
        });
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    const joinRoom = () => {
        if (user && room) socket.emit('joinRoom', room);
    };

    return (
        <div className={`App ${theme}`}>
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/games"
                        element={games ? <Landing games={games} /> : null}
                    />
                    <Route path="/login" exact element={<Login />}></Route>
                    <Route
                        path="/register"
                        exact
                        element={<Register />}
                    ></Route>
                </Routes>
            </BrowserRouter>
            <button onClick={toggleTheme} id="theme"></button>
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
            <button onClick={joinRoom}>Join a room</button>
            <Chat socket={socket} user={user} room={room} />
            <Game socket={socket} user={user} room={room} />
        </div>
    );
};

export default App;
