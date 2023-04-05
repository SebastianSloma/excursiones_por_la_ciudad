import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TourList from './components/TourList';

class App extends Component {
	render() {
		return (
			<main>
				<Navbar />
				<TourList />
			</main>
		);
	}
}

export default App;
