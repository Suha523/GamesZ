import './App.css';
import io from 'socket.io-client';
import { useState, useEffect } from 'react';
import Chat from './components/Chat';
import Game from './components/Game';
import axios from 'axios';
import Landing from './components/Landing';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import JoinGame from './components/JoinGame';
import Room from './Room';
axios.defaults.withCredentials = true;

const socket = io.connect('http://localhost:3002');

const App = () => {
    console.log(sessionStorage);
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
                      <Route
            exact
            path="/ticTacToe"
            element={<Game socket={socket} user={user} room={room} />}
          ></Route>
          <Route path='/room' element={<Room joinRoom={joinRoom}user={user}room={room} setRoom={setRoom}setUser={setUser}></Room>}></Route>
          <Route exact path="/" element={<JoinGame />}></Route>
                </Routes>
            </BrowserRouter>
            <button onClick={toggleTheme} id="theme"></button>
        </div>
    );
};

export default App;
