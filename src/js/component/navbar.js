import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"> <img src="https://www.pngmart.com/files/3/Star-Wars-Logo-PNG-Photos.png" style={{width: '150px'}}  /> </span>
			</Link>
			<div className="ml-auto">
				<Link to="/favorites">
				<button class="btn btn-primary" type="button">
				Favorites
				</button>
				</Link>
			</div>
		</nav>
	);
};
