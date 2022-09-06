import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/styles/login.css';
axios.defaults.withCredentials = true;

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: '',
            headerUserName: '',
        };
    }
    fillUserName = (e) => {
        this.setState({
            userName: e.target.value,
        });
    };
    fillPassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    };
    login = () => {
        axios({
            method: 'post',
            url: 'http://localhost:4001/login',
            data: {
                userName: this.state.userName,
                password: this.state.password,
            },
        }).then((res) => {
            console.log(res);
            if (res.data.Status === 'Done') {
                sessionStorage.setItem('userName', res.data.userName);
                this.setState({ headerUserName: res.data.userName });
                window.location.href = 'http://localhost:3000/';
            } else {
                this.setState({ headerUserName: 'Wrong userName' });
            }
        });
    };
    logout = () => {
        axios({
            method: 'get',
            url: 'http://localhost:4001/logout',
        });
        sessionStorage.clear();
        this.firstTimeIn();
    };
    firstTimeIn = () => {
        axios({
            method: 'get',
            url: 'http://localhost:4001/user',
        }).then((res) => {
            this.setState({ headerUserName: res.data });
        });
    };
    componentDidMount() {
        this.firstTimeIn();
    }
    render() {
        return (
            <div className="login">
                <div className="login Header">
                    <h2>{this.state.headerUserName}</h2>
                </div>
                <input
                    type="text"
                    id="userName"
                    placeholder="User Name"
                    onChange={this.fillUserName}
                ></input>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.fillPassword}
                ></input>
                <button id="loginButton" onClick={this.login}>
                    Login
                </button>
                <button id="loginButton" onClick={this.logout}>
                    Logout
                </button>
                <div>
                    if you do not have an account, register now!
                    <Link to="/register">register</Link>
                </div>
            </div>
        );
    }
}
