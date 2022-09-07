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
            <div className="login-container">
                <div className="login">
                    <h1>login</h1>
                    <div className="Header">
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
                    <button onClick={this.login}>
                        Login
                    </button>
                   
                    <div>
                       <p> if you do not have an account, register now!</p>
                        <Link to="/register" className='link'> register</Link>
                    </div>
                </div>
            </div>
        );
    }
}
