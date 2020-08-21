import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import FacebookBtn from './FacebookLoginBtn';
import LoginStyle from '../style/LoginStyle.css';
import smallBlackNwhite from '../style/Images/LoginImg/smallBlackNwhite.jpg';
import blackFront from '../style/Images/LoginImg/blackFront.jpg';
import carWheel2 from '../style/Images/LoginImg/carWheel2.jpg';
import rightSide from '../style/Images/LoginImg/rightSide.jpg';

class Login extends Component {

    state = {
        email: '',
        password: '',
        isError: false,
        redirectToHome: false,
        isLoggedIn: false,
    };

    login = () => {
        axios.post('http://localhost:4000/login', {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    redirectToHome: true,
                    isLoggedIn: true
                });
                this.props.setUser(true);
            }
            else {
                console.log('Error login')
            }
        }).catch(err => {
            console.log(err)
        })
    }
    render() {

        const disabled = !this.state.email || !this.state.password;
        if (this.state.isLoggedIn) {
            return <Redirect to="/" />
        }
        return (
            <div className="mainContainer">
                <h1>Welcome back    </h1>
                <h2>Please login</h2>
                <div className="loginContainer">
                    <br />
                    <h2>Login with</h2>
                    <p>Email</p>
                    <input type="email" placeholder="Enter your email" onChange={evt => this.setState({ email: evt.target.value })}></input> <br></br>
                    <p>Password</p><input type="password" placeholder="Enter your password" onChange={evt => this.setState({ password: evt.target.value })}></input><br></br>
                    <button disabled={disabled} onClick={this.login}>Login</button>
                    <div className="facebookContainer">
                        <h4>OR</h4>
                        <FacebookBtn setUser={this.props.setUser} />
                    </div>
                </div>
                <div className="imgContainerLogin">
                    <img id="carFrontImg" src={smallBlackNwhite} />
                    <img id="carWheelImg" src={carWheel2} />
                    <img id="carWheelImg" src={rightSide} />
                    <img id="carWheel3Img" src={blackFront} />
                </div>
            </div>
        )
    }
}

export default Login;

