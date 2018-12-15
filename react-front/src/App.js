import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Main from './Main';
import One from './One';
import Two from './Two';
import Three from './Three';
import Login from './Login';
import Register from './Register';

class App extends Component {
  
  state = {
    loggedInStatus: false,
    token: null,
    userDetails: null
  }
  componentDidMount(){
    if (localStorage.getItem('token') !== null){
      this.setState({
        loggedInStatus: true,
        token: localStorage.getItem('token')
      })
    }
  }
  handleLogin = (loginData) => {
    if (loginData.name){
      localStorage.setItem("token", loginData.token);
      this.setState({
        loggedInStatus: true,
        userDetails: loginData,
        token: loginData.token
      })
    }
  }
  logout = () => {
    localStorage.removeItem("token");
    this.setState({
      loggedInStatus: false,
      userDetails: null,
      token: null
    })
  }
  
  render() {
    return (
      <div>
    <Header/>
    <Banner/>
    <Main/>
    <One/>
    <Two/>
    <Three/>
    <Login
            handleLogin={this.handleLogin}></Login>
    <Register/>
    </div>
    );
  }
}

export default App;