import React from 'react';
import Mailto from 'react-protected-mailto';
import './FooterContacts.scss';
import bem from "../../lib/bem";
import CallbackLink from "../CallbackLink/CallbackLink";


const componentName = 'footer-contacts';

function FooterContacts(props) {
	return (
		<div className={props.block()}>
			<Mailto className={props.elem('email')} email={props.email}>{props.email}</Mailto>
			<Mailto className={props.elem('phone')} tel={props.phone}>{props.phone}</Mailto>

			<div className={props.elem('callback')}>
				<CallbackLink/>
			</div>
		</div>
	);
}

export default bem(FooterContacts, componentName);
