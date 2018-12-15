import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Login extends Component {
  state = {
    error: false
  }
  login = () => {

    fetch('http://pawfectsitters.herokuapp.com/login',{
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then((response) => {
      response.json().then((jsonResponse) => {
        console.log(jsonResponse)
      })
    })
  }
  onChange = (input) => {
    this.setState({
      [input.target.name]: input.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    return true;
  }
  render() {
    if (this.props.loggedInStatus){
      return <Redirect to={'./Mypets'} />
    }
    return <section id="login" class="wrapper special">
		<div className="inner">
			<header>
				<h2>Login or register today</h2>
			</header> 
	<h3>Login to continue</h3>
	<form method="post" action="#" onSubmit={this.onSubmit}>
		<div className="row uniform">
			<div className="6u 12u$(xsmall)">
				<input type="email" name="email" id="email" placeholder="Email" onChange={this.onChange} />
			</div>
			<div className="6u$ 12u$(xsmall)">
				<input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange}/>
			</div>
			<div className="12u$">
					<ul class="actions">
						<li><input type="submit" value="Login" onClick={this.login}/></li>
					</ul>
				</div>
	</div>
	</form>
    </div>
    </section>
  }
}
export default Login