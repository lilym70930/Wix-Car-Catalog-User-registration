import React, { useState, useEffect, Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch, Router, Redirect } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Logout from './components/Logout';
import Catalog from './components/Catalog';


class App extends Component {

  state = { user: null };
  setUser = user => {
    this.setState({ user: user });
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Link to='/'>Home</Link>
          {!this.state.user ? <Link to='/Login'>Login</Link> : ""}
          {!this.state.user ? <Link to='/SignUp'>SignUp</Link> : ""}
          {this.state.user ? (<Link to="/Catalog"> Car Catalog</Link>) : ("")}
          {this.state.user ? <Link to='/Logout'>Logout</Link> : ""}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Login' render={() => <Login setUser={this.setUser} />} />
            <Route exact path='/SignUp' render={() => <SignUp setUser={this.setUser} />} />
            <Route exact path="/Catalog" component={Catalog} />
            <Route exact path="/Logout" render={() => <Logout setUser={this.setUser} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


