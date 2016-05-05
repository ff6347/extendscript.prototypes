if (typeof (String.prototype.localeCompare) === 'undefined') {
	String.prototype.localeCompare = function (str, locale, options) {
		return ((this == str) ? 0 : ((this > str) ? 1 : -1));
	};
}
