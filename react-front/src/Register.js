import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Register extends Component {
  register = () => {
    fetch('https://pawfectsitters.herokuapp.com/register-user',{
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        location: this.state.location,
        pettype: this.state.pettype
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
      return <Redirect to={'/Mypets'} />
    }
    return <section id="register" class="wrapper special">
    <h3>Don't have an account? Sign up here</h3>
    <form method="post" action="#" onSubmit={this.onSubmit}>

    <div className="row uniform">
			<div className="6u 12u$(xsmall)">
				<input type="text" name="name" placeholder="Name"onChange={this.onChange}/>
			</div>
			<div className="6u$ 12u$(xsmall)">
				<input type="email" name="email" placeholder="Email" onChange={this.onChange}/>
			</div>
			<div className="6u$ 12u$(xsmall)">
					<input type="password" name="password" placeholder="Password" onChange={this.onChange}/>
				</div>
			<div className="12u$">
					<div className="select-wrapper">
						<select name="location" id="location" onChange={this.onChange}>
							<option value="">- Location -</option>
							<option value="1">Dubai</option>
							<option value="1">Abu Dhabi</option>
						</select>
					</div>
				</div>
			<div className="12u$">
				<div className="select-wrapper">
					<select name="pettype" id="pettype" onChange={this.onChange}>
						<option value="">- Pet Type -</option>
						<option value="1">Dog</option>
						<option value="1">Cat</option>
						<option value="1">Bitd</option>
						<option value="1">Other domestic pets</option>
					</select>
				</div>
			</div>
			<div className="12u$">
					<ul className="actions">
						<li><input type="submit" value="Register" onClick={this.register}/></li>
					</ul>
				</div>
                </div>
    </form></section>
  }
}
export default Register