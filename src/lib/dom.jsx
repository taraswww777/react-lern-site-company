import _ from "lodash";

export function getHeightByClass(className) {
	return _.get(document.querySelector(`.${className}`), 'clientHeight');
}
