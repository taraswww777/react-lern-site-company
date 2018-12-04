import React from 'react';
import './Footer.scss';
import bem from "../../lib/bem";
import logo from "../../media/logo-footer.png";
import FooterLogo from "../FooterLogo/FooterLogo";
import FooterMenu from "../FooterMenu/FooterMenu";
import FooterContacts from "../FooterContacts/FooterContacts";

const componentName = 'footer';

function Footer(props) {
	return (
		<div className={props.block()}>
			<div className={props.elem('container')}>
				<div className={props.elem('row')}>

					<div className={props.elem('ceil', 'type', 'logo')}>
						<FooterLogo title={'Таможенный представитель'} logo={logo}/>
					</div>

					<div className={props.elem('ceil', 'type', 'menu')}>
						<div className={props.elem('menu-item')}>
							<FooterMenu menu={
								[
									{title: 'Глоссарий', to: '/diary'},
									{title: 'Стоимость услуг', to: '/prices'},
									{title: 'О нас в прессе', to: '/about-press'},
									{title: 'Вакансии', to: '/', target: '_blank'},
								]
							}/>
						</div>
						<div className={props.elem('menu-item')}>
							<FooterMenu menu={
								[
									{title: 'Карта сайта', to: '/site-map'},
									{title: 'Политика использования файлов cookie', to: '/police-cookie'},
									{title: 'Условия конфиденциальности', to: '/police-personal'},
								]
							}/>
						</div>
					</div>

					<div className={props.elem('ceil', 'type', 'contacts')}>
						<FooterContacts
							email={'email@emai.l'}
							phone={'8 924 000-00-00'}
						/>
					</div>

				</div>
			</div>

		</div>
	);
}

export default bem(Footer, componentName);
