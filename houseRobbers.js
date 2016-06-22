/////////////////////////////////////////////////////////////
// House Robbers
// --------------------------
// You are given a list of homes with dollar amounts associated with them
// If you rob one house, you can't rob the houses next to them.
//
// Ex. [a, b, c]
// if I rob house 'a', I can't rob house b
// if I rob house 'b', I can't rob a or c
// if I rob house 'c', I can't rob house b
//
// Your goal is to tell me the max dollar amount that I can make
//
/////////////////////////////////////////////////////////////

/**
 * [houseRobbers description]
 *
 * 	>> memoize each valid solution
 * 	>> take max of the result of each valid solution
 * 
 * @param  {[type]} houses [description]
 * @return {[type]}        [description]
 */
function houseRobbers(houses) {

	var result;
	var memo 	= {};
	var len 	= houses.length;

	for (var i = 0 ; i < len ; i++) {

		// since you cant rob your neighbor, skip to the one after;
		var j 	= i + 2;
		// start value should be the current house you'er robbing
		var val = houses[i];

		// take the higher result of each robbable house;
		for (var j = i + 2 ; j < len ; j++) {
			val = Math.max(val, houses[i] + recurse(j));
		}

		if (result === undefined || result < val) {
			result = val;
		}
	}

	function recurse(index) {

		// since we're adding 2 at each recursive step,
		// safeguard to 0 if we go past our neighborhood;
		if (index >= len) {
			return 0;
		}

		// if we've solved the best result at this index, return it;
		if (memo[index]) {
			return memo[index];
		}

		// take the current value + result of the next robbable;
		var val = houses[index] + recurse(index + 2);

		// replace memoized value when greater;
		if (memo[index] === undefined || memo[index] < val) {
			memo[index] = val;
		}

		return val;
	}

	return result;
};

var testCase = [123, 12345, 1, 2, 543, 41];
houseRobbers(testCase); // 12888
