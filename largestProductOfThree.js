/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {

	if (array.length < 3) {
		return;
	}

	// sort array by asc; O(n);
	array = array.sort(sortAsc);

	var smallest 	= array[0];
	var len 		= array.length;
	var largest 	= array[len-1];

	// if smalelst is 0, all positive
	// if largest is < 0, all negatives;
	if (smallest >= 0 && largest <= 0) {
		return largest * array[len-2] * array[len-3];
	}

	var largestPositive = largest * array[len-3] * array[len-2];
	var largestNegative = largest * array[0] * array[1];

	// take max of 2nd largest & 3rd largest vs smallest & 2nd smallest;
	return Math.max(largestPositive, largestNegative);


	function sortAsc(a, b) {
		return a < b ? -1 : 1;
	}
};

largestProductOfThree([-5, -3, 1, 2, 3, 4]);