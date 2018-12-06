import React from 'react';
import bem from "../../lib/bem";
import './PageAbout.scss';

const componentName = 'page-about';

class PageAbout extends React.Component {

	render() {
		return (<>
			<h1>{componentName}</h1>
		</>);
	}
}

export default bem(PageAbout, componentName)
