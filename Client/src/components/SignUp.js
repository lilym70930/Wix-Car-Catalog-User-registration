import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import SignupStyle from '../style/SignupStyle.css';
import whiteFront from '../style/Images/SigninImg/whiteFront.jpg';
import marcFront from '../style/Images/SigninImg/marcFront.jpg';
import wheelBlue from '../style/Images/SigninImg/wheelBlue.jpg';
import frontCar from '../style/Images/SigninImg/frontCar.jpg';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    redirectToHome: false,
    isError: false
  };
  register = () => {
    this.setState({ isError: false });
    axios.post("http://localhost:4000/signup", {
      email: this.state.email,
      password: this.state.password,
    }).then(res => {
      if (res.status === 201) {
        this.setState({
          redirectToHome: true
        });
        this.props.setUser(true);
      }
      else {
        console.log(`error code : ${res.status}`);
      }
    }).catch(err => {
      console.log(err);
    })
  }
  render() {
    const disabled = !this.state.email || !this.state.password;
    if (this.state.redirectToHome) {
      return <Redirect to="/" />
    }
    return (
      <div className="mainContainer">
        <h1>WELCOME TO OUR CAR CATALOG</h1>
        <h2>Please signup to see the car catalog</h2>
        <div className="signupContainer">
          <br></br>
          <h2>Signup with</h2>
          <br></br>
          <p>Email</p>
          <input placeholder=" Enter your email "
            onChange={evt => this.setState({ email: evt.target.value })}
            type="email" />
          <br />
          <p>Password</p>
          <input placeholder="Enter your password"
            onChange={evt => this.setState({ password: evt.target.value })}
            type="password" />
          <br />
          {this.state.isError ? <p style={{ color: 'red' }}>Register error</p> : ""} <br></br><br></br>
          <button disabled={disabled} onClick={this.register}>Register</button>
        </div>
        <div className="imgContainer">
          <img id="carFrontImg" src={whiteFront} />
          <img id="carWheelImg" src={wheelBlue} />
          <img id="carWheelImg" src={frontCar} />
          <img id="carWheel3Img" src={marcFront} />
        </div>
      </div>
    )
  }
}

export default SignUp;