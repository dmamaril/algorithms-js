/////////////////////////////////////////////////////////////
// LARGEST CONTIGUOUS SUM
// -----------------------------------------
// What is the largest contiguous (row of numbers) sum of an array of digits?
//
// EX:
// [1, 2, 3] => 6
// [1, 2,-2, 3] => 4
// [1, 2,-4, 1, 2, 3] => 6
//
/////////////////////////////////////////////////////////////


// modified kadane's algo
var largestContiguousSum = function (array) {

	var currentMax  = array[0];
	var globalMax 	= array[0];

	for (var i = 1 ; i < array.length ; i++) {

		var currentNum 	= array[i];
		var currentSum 	= currentMax + currentNum;

		currentMax 		= currentSum < 0 ? 0 : currentSum;
		globalMax 		= Math.max(currentMax, globalMax);
	}

	return currentMax;
};

// largestContiguousSum(array) // 57
// largestContiguousSum([-1, 3, -5, 4, 6, -1, 2, -7, 13, -3]);