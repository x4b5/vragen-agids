let _showModal = $state(false);

export const modal = {
	get open() {
		return _showModal;
	},
	set open(value: boolean) {
		_showModal = value;
	},
	toggle() {
		_showModal = !_showModal;
	}
};
