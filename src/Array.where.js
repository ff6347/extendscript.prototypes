var lambda = function (l) {
	var fn = l.match(/\((.*)\)\s*=>\s*(.*)/);
	var p = [];
	var b = "";

	if (fn.length > 0) fn.shift();
	if (fn.length > 0) b = fn.pop();
	if (fn.length > 0) p = fn.pop()
		.replace(/^\s*|\s(?=\s)|\s*$|,/g, '')
		.split(' ');

	// prepend a return if not already there.
	fn = ((!/\s*return\s+/.test(b)) ? "return " : "") + b;

	p.push(fn);

	try {
		return Function.apply({}, p);
	} catch (e) {
		return null;
	}
};

/**
 * from here
 * http://www.paulfree.com/28/javascript-array-filtering/#more-28
 */
if (typeof (Array.prototype.where) === 'undefined') {
	Array.prototype.where = function (f) {
		var fn = f;
		// if type of parameter is string
		if (typeof f == "string")
		// try to make it into a function
			if ((fn = lambda(fn)) === null)
			// if fail, throw exception
				throw "Syntax error in lambda string: " + f;
			// initialize result array
		var res = [];
		var l = this.length;
		// set up parameters for filter function call
		var p = [0, 0, res];
		// append any pass-through parameters to parameter array
		for (var i = 1; i < arguments.length; i++) {
			p.push(arguments[i]);
		}
		// for each array element, pass to filter function
		for (var j = 0; j < l; j++) {
			// skip missing elements
			if (typeof this[j] == "undefined") continue;
			// param1 = array element
			p[0] = this[j];
			// param2 = current indeex
			p[1] = j;
			// call filter function. if return true, copy element to results
			if ( !! fn.apply(this, p)) res.push(this[j]);
		}
		// return filtered result
		return res;
	};
}