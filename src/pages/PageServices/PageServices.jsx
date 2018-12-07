import React from 'react';
import _ from 'lodash';
import bem from "../../lib/bem";
import './PageServices.scss';
import H1 from "../../components/simple/H1/H1";
import {connect} from "react-redux";
import dispatchPages from "../../dispatches/dispatchPages";
import PreLoader from "../../components/simple/PreLoader/PreLoader";
import {dispatchCombine} from "../../lib/dispatchCombine";
import dispatchServices from "../../dispatches/dispatchServices";
import ServicesList from "../../components/simple/ServicesList/ServicesList";

const componentName = 'page-services';

class PageServices extends React.Component {

	render() {
		return (<div className={this.props.block()}>
			<div className={this.props.elem('container', 'bg', 'white')}>
				<div className={this.props.elem('row')}>
					<div className={this.props.elem('ceil-middle')}>

						{this.props.pageData === undefined ? <PreLoader/> :
							this.props.pageData.length > 0 ? <div>Не удалось загрузить страницу</div> :
								<div>
									<H1>{componentName}</H1>
									<div className={this.props.elem('inner-html')} dangerouslySetInnerHTML={{__html:this.props.pageData.detailText}}/>
								</div>}

						{this.props.listServices === undefined ? <PreLoader/> :
							this.props.listServices === 0 ? <div>Не удалось загрузить список услуг</div> :
								<div><ServicesList listServices={this.props.listServices}/></div>
						}

					</div>
				</div>
			</div>

		</div>);
	}

	componentDidMount() {
		this.props.dispatchPages.loadPageBySlug('services');
		this.props.dispatchServices.loadListServices()
	}
}

function mapStatePageServices(state) {
	return {
		pageData: _.get(state, 'ReducerPages.pageData'),
		listServices: _.get(state, 'ReducerServices.listServices')
	}
}

export default connect(mapStatePageServices, dispatchCombine(dispatchPages, dispatchServices))(bem(PageServices, componentName));
