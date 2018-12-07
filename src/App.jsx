import React, {Component} from 'react';
import Header from "./components/Header/Header";
import './App.scss';
import bem from "./lib/bem";
import Footer from "./components/Footer/Footer";
import imgHeader from "./media/img-header.png";
import BreadCrumbs from "./components/simple/BreadCrumbs/BreadCrumbs";

const listBreadCrumbs = [
	{title: 'Главная', to: '/'},
	{title: 'Услуги', to: '/services'},
];

class App extends Component {
	render() {
		return (<div className={this.props.block()}>
			<div className={this.props.elem('header')}>
				<Header/>
			</div>
			<div className={this.props.elem('container')}>
				<div className={this.props.elem('row')}>
					<div className={this.props.elem('ceil')}>
						<img src={imgHeader} className={this.props.elem('img-header')} alt={'img-header'}/>
					</div>
					{listBreadCrumbs.length > 1 &&
					<div className={this.props.elem('ceil-bread-crumbs')}>
						<BreadCrumbs list={listBreadCrumbs}/>
					</div>}
				</div>
			</div>
			<div className={this.props.elem('content')}>
				{this.props.children}
			</div>
			<div className={this.props.elem('footer')}>
				<Footer/>
			</div>
		</div>);
	}
}

export default bem(App, 'app');
