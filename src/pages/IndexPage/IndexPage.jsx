import React from 'react';
import bem from "../../lib/bem";

const componentName = 'index-page';

class IndexPage extends React.Component {

	render() {
		return (<>
			<h1>index page</h1>
		</>);
	}
}

export default bem(IndexPage, componentName)
