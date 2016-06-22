/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:
 * 
 * spiralTraversal([
 *   [1,2,3],
 *   [4,5,6],
 *   [7,8,9]
 * ]);
 * 
 * //[1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

/**
 * [spiralTraversal description]
 * @param  {[type]} matrix [description]
 * @return {[type]}        [description]
 */
function spiralTraversal(matrix){

	var result 	= [];
	var tracker = {};
	var min 	= 0;
	var max 	= matrix.length-1;
	var mid 	= Math.floor(max/2);

	var pushAndTrack = function (r, c) {

		var key 		= [r, c].join(':');
		tracker[key] 	= true;

		result.push(matrix[r][c]);
	};

	var notVisited = function (r, c) {
		var key = [r, c].join(':');
		return !tracker.hasOwnProperty(key);
	};

	var traverse = function (rowIndex, colIndex) {

		var completed = true;

		// go right;
		while (colIndex < max && notVisited(rowIndex, colIndex)) {
			completed = false;
			pushAndTrack(rowIndex, colIndex);
			colIndex++;
		}

		// go down;
		while (rowIndex < max && notVisited(rowIndex, colIndex)) {
			completed = false;
			pushAndTrack(rowIndex, colIndex);
			rowIndex++;
		}

		// go left;
		while (colIndex > min && notVisited(rowIndex, colIndex)) {
			completed = false;
			pushAndTrack(rowIndex, colIndex);
			colIndex--;
		}

		// go up
		while (rowIndex > min && notVisited(rowIndex, colIndex)) {
			completed = false;
			pushAndTrack(rowIndex, colIndex);
			rowIndex--;
		}


		if (!completed) {

			max--;
			min++;
			rowIndex++;
			colIndex++;

			traverse(rowIndex, colIndex);

		} else if (notVisited(rowIndex, colIndex)) {

			pushAndTrack(rowIndex, colIndex);
		}
	};

	traverse(0, 0)
	return result;
};


spiralTraversal(
	[
		[1, 2, 3, 4, 5],
		[6, 7, 8, 9, 10],
		[11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25],
	]
);