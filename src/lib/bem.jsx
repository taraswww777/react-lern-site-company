import React from "react";

function bem(WrapComponent, componentName = 'undefinedComponentName') {
	return class BemComponent extends React.Component {

		static block(mod = '', modValue = '') {
			let className = componentName;

			if (mod !== '') {
				className += ' ' + componentName + '--' + mod;
				if (modValue !== '') {
					className += '_' + modValue;
				}
			}

			return className;
		}

		static elem(nameElement, mod = '', modValue = '') {
			let className = componentName + '__' + nameElement;

			if (mod !== '') {
				className += ' ' + componentName + '__' + nameElement + '--' + mod;
				if (modValue !== '') {
					className += '_' + modValue;
				}
			}
			return className;
		}

		render() {

			return <WrapComponent block={BemComponent.block} elem={BemComponent.elem} {...this.props}/>;
		}

	}
}

export default bem;

