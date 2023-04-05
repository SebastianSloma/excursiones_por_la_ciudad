import React from 'react';
import './Navbar.css';
import logo from '../image/images.jpg';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<img className='logo' src={logo} alt='logo' />
			<ul className='nav-links'>
				<li>
					<a href='/' className='nav-link'>Home</a>
				</li>
				<li>
					<a href='/' className='nav-link'>About</a>
				</li>
				<li>
					<a href='/' className='nav-link active'>Tours</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
