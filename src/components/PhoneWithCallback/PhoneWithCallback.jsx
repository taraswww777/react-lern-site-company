import React from 'react';
import './PhoneWithCallback.scss';
import bem from "../../lib/bem";
import phoneIcon from "../../media/icon-phone.svg";

const componentName = 'phone-with-callback';

function PhoneWithCallback(props) {
	return (
		<div className={props.block()}>
			<div className={props.elem('phone')}>
				<img src={phoneIcon} className={props.elem('phone-icon')} alt={'phone'}/>
				{props.phone}</div>
			<div className={props.elem('callback')}>{props.titleCallback}</div>
		</div>
	);
}

export default bem(PhoneWithCallback, componentName);
