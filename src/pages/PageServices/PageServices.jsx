import React from 'react';
import bem from "../../lib/bem";
import './PageServices.scss';

const componentName = 'page-services';

class PageServices extends React.Component {

	render() {
		return (<>
			<h1>{componentName}</h1>
		</>);
	}
}

export default bem(PageServices, componentName)
