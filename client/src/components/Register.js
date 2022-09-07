import React, { Component } from 'react';
import axios from 'axios';
import '../assets/styles/register.css';
export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: '',
            email: '',
            name: '',
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
    fillEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    };
    fillName = (e) => {
        this.setState({
            name: e.target.value,
        });
    };
    registerToDataBase = () => {
        axios({
            method: 'post',
            url: 'http://localhost:4001/register',
            data: {
                userName: this.state.userName,
                password: this.state.password,
                name: this.state.name,
                email: this.state.email,
            },
        }).then((res) => {
            if (res.data.Status === 'Done') {
                this.setState({ headerUserName: res.data.userName });
            } else {
                this.setState({ headerUserName: 'Wrong userName' });
            }
        });
    };
    render() {
        return (
            <div className="body">
                <div className="container">
                    <div className="title">
                        <h2>Register Page</h2>
                    </div>
                    <form>
                        <div className="registerInfo">
                            <input
                                className="input-box"
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                onChange={this.fillName}
                            ></input>

                            <input
                                className="input-box"
                                type="text"
                                id="userName"
                                placeholder="Your Username"
                                onChange={this.fillUserName}
                            ></input>

                            <input
                                className="input-box"
                                type="email"
                                id="email"
                                placeholder="Your E-Mail"
                                onChange={this.fillEmail}
                            ></input>

                            <input
                                className="input-box"
                                type="password"
                                id="password"
                                placeholder="Your Password"
                                onChange={this.fillPassword}
                            ></input>
                        </div>

                        <div className="button">
                            <button
                                id="register"
                                onClick={this.registerToDataBase}
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
