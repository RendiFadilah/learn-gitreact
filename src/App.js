import React, { Component } from "react";
import LandingLogin from "./pages/LandingLogin";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/css/style.css";
export default class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Route>
						<LandingLogin />
					</Route>
				</Router>
			</div>
		);
	}
}
