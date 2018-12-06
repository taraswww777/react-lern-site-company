import React from 'react';
import './CallbackLink.scss';
import bem from "../../../lib/bem";


const componentName = 'callback-link';

function openCallbackForm() {
	alert('openCallbackForm in process dev')
}

function CallbackLink(props) {
	return (
		<span onClick={openCallbackForm} className={props.block()}>Заказать звонок</span>
	);
}

export default bem(CallbackLink, componentName);
