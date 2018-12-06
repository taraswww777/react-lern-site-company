import React from 'react';
import './Phone.scss';
import bem from "../../../lib/bem";
import Mailto from "react-protected-mailto";

const componentName = 'phone';

function Phone(props) {
	return (
		<Mailto className={props.block()} tel={props.tel}/>
	);
}

export default bem(Phone, componentName);
