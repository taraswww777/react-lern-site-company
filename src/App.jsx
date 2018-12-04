import React, {Component} from 'react';
import Header from "./components/Header/Header";
import './App.scss';
import bem from "./lib/bem";
import Footer from "./components/Footer/Footer";

class App extends Component {
	render() {
		return (<>
			<Header/>
			<div>
				{this.props.children}
			</div>
			<Footer/>
		</>);
	}
}

export default bem(App, 'app');
