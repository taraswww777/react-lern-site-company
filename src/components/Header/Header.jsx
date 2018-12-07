import React from 'react';
import _ from 'lodash';
import './Header.scss';
import bem from "../../lib/bem";
import Email from "../simple/EmailWithIcon/EmailWithIcon";
import SearchInput from "../SearchInput/SearchInput";
import PhoneWithIcon from "../simple/PhoneWithIcon/PhoneWithIcon";
import MainMenu from "../MainMenu/MainMenu";
import iconMenu from "../../media/icon-menu.svg";
import BranchMenu from "../mobile/BranchMenu/BranchMenu";
import Address from "../simple/Address/Address";
import CallbackLink from "../simple/CallbackLink/CallbackLink";
import Mailto from "react-protected-mailto";
import AddressIcon from "../simple/AddressIcon/AddressIcon";
import {getHeightByClass} from "../../lib/dom";

const componentName = 'header';

const menuList = [
	{title: 'Главная', to: '/'},
	{title: 'Услуги', to: '/services'},
	{title: 'Статьи', to: '/articles'},
	{title: 'Новости', to: '/news'},
	{title: 'Отзывы', to: '/reviews'},
	{title: 'Контакты', to: '/contacts'},
];

const contacts = {
	email: 'info@sezs.ru',
	phone: '+7 495 640-62-06',
	address: 'Москва, ул Братиславская, д.6, оф. 51-52',
	certificate: 'Свидетельство № 0082/05 от 15.11.2016'
};
const branchItem={
	city:'Any name city', to:'#'
};
const branchList = [
	branchItem,branchItem,branchItem,
	branchItem,branchItem,branchItem,
	branchItem,branchItem,branchItem,
	branchItem,branchItem,branchItem,
	branchItem,branchItem,branchItem,
	branchItem,branchItem,branchItem,
];

// const defH = '84px';
const branchDefH = '80px';
const branchDefTop = '20px';
const branchDefIsOpen = false;

class Header extends React.Component {
	state = {
		branch: {
			isOpen: branchDefIsOpen,
			height: branchDefH,
			top: branchDefTop
		}
	};

	constructor(props) {
		super(props);

		this.toggleBranchOpen.bind(this)
	}

	toggleBranchOpen() {
		this.setState({
			...this.state,
			branch: {
				isOpen: !_.get(this.state, 'branch.isOpen', false),
				height: getHeightByClass(this.props.elem('branch-title')) + getHeightByClass(this.props.elem('info')) + 'px',
				top: getHeightByClass(this.props.elem('branch-title')) + 'px'
			}
		})
	}

	render() {
		const branchIsOpen = _.get(this.state, 'branch.isOpen', branchDefIsOpen);
		return (
			<div className={this.props.block()}
			     style={{minHeight: `${getHeightByClass(this.props.elem('wrap'))}px`}}>
				<div className={this.props.elem('wrap')}>
					<div className={this.props.elem('info')}>
						<div className={this.props.elem('container')}>
							<div className={this.props.elem('row')}>
								<div className={this.props.elem('ceil', 'type', 'menu-toggle')}>
									<img src={iconMenu} alt="menu-toggle" className={this.props.elem('menu-toggle')}/>
									<div className={this.props.elem('contacts-address-icon')}><AddressIcon/></div>
								</div>
								<div className={this.props.elem('ceil', 'type', 'address')}>
									<div className={this.props.elem('contacts-address')}><Address address={contacts.address}/></div>
									<div className={this.props.elem('contacts-certificate')}>{contacts.certificate}</div>
								</div>

								<div className={this.props.elem('ceil', 'type', 'phone')}>
									<div className={this.props.elem('contacts-phone-with-icon')}>
										<PhoneWithIcon phone={contacts.phone} titleCallback={'Заказать звонок'}/>
									</div>

									<Mailto className={this.props.elem('contacts-phone')} tel={contacts.phone}/>

									<div className={this.props.elem('contacts-callback')}>
										<CallbackLink/>
									</div>

								</div>

								<div className={this.props.elem('ceil', 'type', 'email')}><Email email={contacts.email}/></div>
								<div className={this.props.elem('ceil', 'type', 'search')}><SearchInput placeholder={'Поиск по сайту'}/>
								</div>

							</div>
						</div>
					</div>

					<div className={this.props.elem('nav')}>
						<div className={this.props.elem('container')}>
							<div className={this.props.elem('row')}>
								<div className={this.props.elem('main-menu')}>
									<MainMenu menu={menuList}/>
								</div>
							</div>
						</div>
					</div>


					<div className={this.props.elem('branch')}>
						<div
							className={this.props.elem('branch-title', branchIsOpen ? 'open' : '')}
							onClick={() => {
								this.toggleBranchOpen()
							}}>
							Список подразделений
						</div>
						<div
							className={this.props.elem('branch-menu', branchIsOpen ? 'open' : '')}
							style={_.get(this.state, 'branch.isOpen', branchDefIsOpen) ? {
								height: `calc(100vh - ${_.get(this.state, 'branch.height', '40px')})`,
								top: _.get(this.state, 'branch.top')
							} : {}
							}
						>
							<BranchMenu branchList={branchList}/>
						</div>
					</div>
				</div>

			</div>
		);
	}

	setMinHeight() {
		document.querySelector(`.${this.props.block()}`).style.minHeight = getHeightByClass(this.props.elem('wrap')) + 'px';
	}

	componentDidMount() {
		this.setMinHeight();
	}

}

export default bem(Header, componentName);
