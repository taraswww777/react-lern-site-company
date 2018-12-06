import React from 'react';
import './PhoneWithIcon.scss';
import bem from "../../../lib/bem";
import phoneIcon from "../../../media/icon-phone.svg";
import Mailto from "react-protected-mailto";

const componentName = 'phone-with-icon';

function PhoneWithIcon(props) {
	return (
		<div className={props.block()}>
			<img src={phoneIcon} className={props.elem('icon')} alt={'phone'}/>
			<Mailto className={props.elem('number')} tel={props.phone}/>
		</div>
	);
}

export default bem(PhoneWithIcon, componentName);
