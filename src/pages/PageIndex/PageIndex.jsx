import React from 'react';
import _ from 'lodash';
import bem from "../../lib/bem";
import './PageIndex.scss';
import {connect} from "react-redux";
import dispatchPages from "../../dispatches/dispatchPages";
import PageTitle from "../../components/simple/H1/H1";
import PreLoader from "../../components/simple/PreLoader/PreLoader";

const componentName = 'page-index';

class PageIndex extends React.Component {

	render() {
		const pageData = _.get(this.props,'pageData', null);

		return (<div className={this.props.block()}>
			<div className={this.props.elem('container')}>
				<div className={this.props.elem('row')}>
					<div className={this.props.elem('ceil')}>
						{pageData? <>
						<PageTitle className={this.props.elem('title')}>{pageData.title}</PageTitle>

							{pageData.detailImage && <img className={this.props.elem('img')} src={pageData.detailImage} alt={pageData.title}/>}

							<div className={this.props.elem('detail')}>{pageData.detailText}</div>
						</>: <PreLoader/>}
					</div>
				</div>
			</div>
		</div>);
	}

	componentDidMount() {
		this.props.loadPageBySlug('about')
	}
}

function mapStatePageIndex(state) {
	return {
		pageData: _.get(state, 'ReducerPages.pageData')
	}
}

export default connect(mapStatePageIndex, dispatchPages)(bem(PageIndex, componentName));
