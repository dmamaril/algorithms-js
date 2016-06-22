/////////////////////////////////////////////////////////////
// asyncMap
// --------------------------
// Implement async.map
// https://github.com/caolan/async#mapcoll-iteratee-callback
//
/////////////////////////////////////////////////////////////

/**
 * [asyncMap description]
 * @param  {[type]}   arr      [description]
 * @param  {[type]}   iterator [description]
 * @param  {Function} cb       [description]
 * @return {[type]}            [description]
 */
function asyncMap(arr, iterator, cb) {

	// safeguards;
	if (typeof cb !== 'function') {
		cb = function () {};
	}

	// validate;
	if (!Array.isArray(arr)) {
		return cb(new Error('Expected argument "arr" to be type Array.'));
	}

	// safeguard && early exit;
	if (typeof iterator !== 'function' || arr.length === 0) {
		return cb(null, arr);
	}

	var len 		= arr.length;
	var resolved 	= false;
	var result 		= [];
	var nCompleted 	= 0;

	// bind index to done fn to properly place result of async fn;
	// dont really need to bind el, but doing it for funsies;
	for (var i = 0 ; i < len ; i++) {
		iterator(arr[i], done.bind({ index: i, el: arr[i] }));
	}

	/**
	 * [done description]
	 * @param  {[type]}   err [description]
	 * @param  {[type]}   res [description]
	 * @return {Function}     [description]
	 */
	function done(err, res) {

		if (err) {
			// if there's an error and cb has already been called, throw err;
			// otherwise end the task & mark it resolved;
			resolved ? throw(new Error('Callback has already been called.')) : cb(err);
			resolved = true;
			return;
		}

		// place result of iterator in proper index
		// increment nCompleted to determine when to call cb;
		result[this.index] = res;
		nCompleted++;

		// if we've completed and we haven't already resolved, finish it;
		if (nCompleted === len && resolved === false) {
			resolved = true;
			return cb(null, result);
		}
	}
}


asyncMap(

	[1,2,3],

	function (el, cb) {
		setTimeout(function () {
			cb(null, el * 2);
		}, 1000 / el);
	},

	function (err, res) {
		console.log(res);
	}

); // [2, 4, 6]