import Function_noop from '../core/Function/noop';

export default function() {
	return {
		cancelLoad: Function_noop,
		loadError: false,
		loading: false,
		loadProgress: 0,
		loadSuccess: false,

		image: false,

		scaling: 1,
	};
}
