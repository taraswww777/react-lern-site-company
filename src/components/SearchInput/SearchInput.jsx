import React from 'react';
import './SearchInput.scss';
import bem from "../../lib/bem";

const componentName = 'search-input';

function SearchInput(props) {
	return (<>
		<input
			type={'text'}
			placeholder={props.placeholder}
			className={props.block()}/>
	</>);
}

export default bem(SearchInput, componentName);
