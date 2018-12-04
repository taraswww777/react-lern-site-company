import React from 'react';
import Mailto from 'react-protected-mailto';
import './Email.scss';
import bem from "../../lib/bem";
import emailIcon from "../../media/icon-email.svg";

const componentName = 'email';

function Email(props) {
	return (
		<div className={props.block()}>
			<img src={emailIcon} className={props.elem('icon')} alt={'email'}/>
			<Mailto email={props.email} className={props.elem('link')}>
				{props.email}</Mailto>
		</div>
	);
}

export default bem(Email, componentName);
