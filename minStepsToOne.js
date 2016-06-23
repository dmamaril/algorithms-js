/////////////////////////////////////////////////////////////
// Min Steps To One:
// -------------------------------
// On a positive int, you can perform 3 steps:
// 1. Subtract 1 from it
// 2. if it's divisible by 2, divide by 2
// 3. if it's divisible by 3, divide by 3
//
// Return the minimum number of steps to 1
//
// EX:
// 10 -> 9 -> 3 -> 1
// 5 -> 4 -> 2 -> 1
/////////////////////////////////////////////////////////////



/**
 * [getMinSteps description]
 *
 * minSteps = Math.min(P(n-1, P(n/2), P(n/3));
 * 
 * @param  {[type]} n [description]
 * @return {[type]}   [description]
 */
function getMinSteps(n) {

	var memo = {};

	function getSteps(num) {

		if (num <= 1) {
			return 0;
		}

		if (memo[num]) {
			return memo[num];
		}

		var x, y, z;

		x = getSteps(num - 1);
		y = num % 2 === 0 ? getSteps(num / 2) : num;
		z = num % 3 === 0 ? getSteps(num / 3) : num;

		var minSteps 	= 1 + Math.min(x, y, z);
		memo[num] 		= minSteps;

		return minSteps;
	}

	return getSteps(n);
}

/////////////////////////////////////////////////////////////
// TESTS
/////////////////////////////////////////////////////////////
getMinSteps(20);