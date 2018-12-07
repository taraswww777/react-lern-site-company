import _ from 'lodash';

export function dispatchCombine(...dispatchers) {

	 return (dispatch) => {
		const dispatchersMerged = {};
		_.map(dispatchers, dispatcherItem => {
			if (dispatcherItem.name) {
				dispatchersMerged[dispatcherItem.name] = dispatcherItem(dispatch)
			} else {
				console.error('dispatcherItem not have name ', dispatcherItem)
			}
		});
		return dispatchersMerged;
	};
}
