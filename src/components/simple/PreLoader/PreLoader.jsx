import React from 'react';
import './PreLoader.scss';
import bem from "../../../lib/bem";

const componentName = 'pre-loader';

function PreLoader(props) {
	return <div className={props.block()}>{props.children}</div>;
}


export default bem(PreLoader, componentName);
