import React from 'react';
import './Header.scss';
import bem from "../../lib/bem";
import Email from "../Email/Email";
import SearchInput from "../SearchInput/SearchInput";
import AddressWithCertificate from "../AddressWithCertificate/AddressWithCertificate";
import PhoneWithCallback from "../PhoneWithCallback/PhoneWithCallback";
import MainMenu from "../MainMenu/MainMenu";

const componentName = 'header';

function Header(props) {
	return (
		<div className={props.block()}>
			<div className={props.elem('info')}>
				<div className={props.elem('container')}>
					<div className={props.elem('row')}>
						<div className={props.elem('ceil', 'type', 'address')}>
							<AddressWithCertificate
								address={'Москва, ул Братиславская, д.6, оф. 51-52'}
								certificate={'Свидетельство № 0082/05 от 15.11.2016'}
							/>
						</div>

						<div className={props.elem('ceil', 'type', 'phone')}>
							<PhoneWithCallback
								phone={'+7 (495) 640-62-06'}
								titleCallback={'Заказать звонок'}
							/>
						</div>

						<div className={props.elem('ceil', 'type', 'email')}><Email email={'info@info.ru'}/></div>
						<div className={props.elem('ceil', 'type', 'search')}><SearchInput placeholder={'Поиск по сайту'}/></div>

					</div>
				</div>
			</div>

			<div className={props.elem('nav')}>
				<div className={props.elem('container')}>
					<div className={props.elem('row')}>
					<div className={props.elem('main-menu')}>
						<MainMenu menu={
							[
								{title: 'Главная', to: '/'},
								{title: 'О компании', to: '/about'},
								{title: 'Услуги', to: '/services'},
								{title: 'Статьи', to: '/articles'},
								{title: 'Новости', to: '/news'},
								{title: 'Отзывы', to: '/reviews'},
								{title: 'Контакты', to: '/contacts'},
							]
						}/>
					</div>
				</div>
				</div>
			</div>

		</div>
	);
}

export default bem(Header, componentName);
