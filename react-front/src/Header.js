import React, { Component } from 'react';

function Header(props) {
   return (
    <header id="header">
				<div className="inner">
					<img src="images/logo.png" alt="PawFect Sitters" align="left" />
					<nav id="nav">
						<a href="#main">About Us</a>
						<a href="#two">Find a Petsitter</a>
						<a href="#login">Sign Up / Login (for Pet Owners)</a>
					</nav>
					<a href="#navPanel" class="navPanelToggle"><span class="fa fa-bars"></span></a>
				</div>
			</header>
   );
}

export default Header;