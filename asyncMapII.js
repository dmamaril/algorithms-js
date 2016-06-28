'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */


function asyncMap(tasks, callback){

	if (!Array.isArray(tasks)) {
		throw new Error('Expected tasks to be of type Array. Instead received ' + typeof tasks);
		return;
	}

	if (typeof callback !== 'function') {
		callback = function () {};
	}

	var nCompleted 	= 0;
	var results 	= [];
	var resolved 	= false;
	var len  		= tasks.length;

	for (var i = 0 ; i < len; i++) {

		var task = tasks[i];

		if (typeof task !== 'function') {
			results[i] = new Error('Expected task to be of type Function. Instead received ' + typeof task);
			continue;
		}

		task(done.bind({ index: i }));
	}

	function done(err, res) {

		nCompleted++;
		results[this.index] = err || res;

		if (nCompleted === len && !resolved) {
			resolved = true;
			callback(results);
		}
	}
};



var fns = [1,2,3].map(function (el) {
	return function (cb) {
		setTimeout(function () {
			cb(null, el * 2);
		}, el * 500);
	};
});

var onTaskComplete = function (results) {
	console.log(results);
};

asyncMap(fns, onTaskComplete);