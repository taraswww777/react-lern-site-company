import React from 'react';
import './H1.scss';
import bem from "../../../lib/bem";

const componentName = 'h1';

function H1(props) {
	return (
		<h1 className={props.block()}>{props.children}</h1>
	);
}

export default bem(H1, componentName);
