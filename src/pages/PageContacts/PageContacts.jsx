import React from 'react';
import bem from "../../lib/bem";
import './PageContacts.scss';

const componentName = 'page-contacts';

class PageContacts extends React.Component {

	render() {
		return (<>
			<h1>{componentName}</h1>
		</>);
	}
}

export default bem(PageContacts, componentName)
