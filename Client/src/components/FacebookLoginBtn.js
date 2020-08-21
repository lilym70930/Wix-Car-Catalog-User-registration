import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import FacebookBtnStyle from '../style/FacebookBtnStyle.css';
import { Redirect } from 'react-router-dom';

class FacebookBtn extends Component {

    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: '',
        redirectToHome: false,
    }
    responseFacebook = response => {
        axios.post('http://localhost:4000/login', response).then(res => {
            if (res.status === 200) {
                const user = res.data;
                this.props.setUser(user);
                this.setState({
                    isLoggedIn: true,
                    redirectToHome: true,
                    user,
                });
            }
            else {
                console.log('Error login', res)
            }
        }).catch(err => {
            console.log(err)
        })
    }
    componentClicked = () => {
        console.log('facebook btn was clicked');
    }
    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = (
                <div style={{
                    width: '300px',
                    backgroundColor: '#f4f4f4',
                }}>
                    <img src={this.state.user.imageUrl} alt={this.state.user.familyName} />
                    <h1>Welcome {this.state.user.firstName}</h1>
                </div>
            );
        }
        else {
            fbContent = (<FacebookLogin
                appId="295176565099247"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            )
        }
        if (this.state.redirectToHome) {
            return <Redirect to="/" />
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}

export default FacebookBtn;