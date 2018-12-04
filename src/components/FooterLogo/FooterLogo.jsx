import React from 'react';
import './FooterLogo.scss';
import bem from "../../lib/bem";
import {Link} from "react-router-dom";

const componentName = 'footer-logo';

function FooterLogo(props) {
	return (
		<div className={props.block()}>
			<div className={props.elem('title')}>{props.title}</div>
			<Link to={'/'}>
				<img className={props.elem('logo')} src={props.logo} alt={'logo'}/>
			</Link>
		</div>
	);
}

export default bem(FooterLogo, componentName);
