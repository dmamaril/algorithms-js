/////////////////////////////////////////////////////////////
//  Thief's knapsack
// --------------------------
// A Thief has a knapsack that can hold X lbs of stolen goods
// Each stolen good is worth a certain amount of cash, but
// the stolen good also weighs a certain weight. This means that
// the thief has to pick an optimal combination of items!
//
// The Thief can't pick the same item twice.
//
// What is the maximum worth of goods that the thief can steal?
//
/////////////////////////////////////////////////////////////

/**
 * [knapsack description]
 * 
 * @param  {[type]} weights   [description]
 * @param  {[type]} maxWeight [description]
 * @return {[type]}           [description]
 */
function knapsack(weights, maxWeight) {

	var matrix 			= [];
	var results 		= [];
	var total_weight 	= 0;

	var sorted_weights 	= Object.keys(weights);
	sorted_weights 		= sorted_weights.map(Number).sort(sortAsc);
	sorted_weights.unshift(0); // add 0th row to fill matrix;

	// BUILD MATRIX
	for (var i = 0 ; i < sorted_weights.length ; i++) {

		matrix[i] 			= [];
		var current_weight 	= sorted_weights[i];
		var current_value 	= weights[current_weight];

		if (i > 0) {
			// slice previous matrix up to current_weight-1 b/c
			// everthing else before is exactly the same (DYNAMIC PROGRAMMING YAY);
			var prev_matrix = matrix[i-1].slice(0, current_weight);
			matrix[i] 		= matrix[i].concat(prev_matrix);
		}

		for (var j = current_weight ; j <= maxWeight ; j++) {

			// fill top col of matrix;
			if (i === 0) {
				matrix[i].push(0);
				continue;
			}

			// take prev to compare;
			var prev_val = matrix[i-1][j];

			// take prev row if any weight is leftover;
			// >> i wonder if this needs to be in a while loop for larger items
			// >> where we can fit more after previous weight; is it possible??
			var max_val = current_value + matrix[i-1][j-current_weight];

			// take the higher of the 2;
			var new_val = Math.max(max_val, prev_val);

			if (isNaN(new_val)) debugger;


			// insert the higher of the 2;
			matrix[i][j] = new_val;
		}
	}

	// FIND ANSWER
	function compare(rowIndex, colIndex) {

		if (rowIndex <= 0) return;

		var result 		= {};
		var current_val = matrix[rowIndex][colIndex];
		var prev_val 	= matrix[rowIndex-1][colIndex];

		if (current_val > prev_val) {

			var weight 		= sorted_weights[rowIndex];
			result[weight] 	= weights[weight];
			total_weight   += weights[weight];

			results.push(result);
			compare(rowIndex - 1, colIndex - weight);

		} else {

			compare(rowIndex - 1, colIndex)
		}
	}

	compare(matrix.length-1, matrix[0].length-1);
	// return results;
	return total_weight;

	// sort ins by asc order
	function sortAsc(a, b) {
		return a < b ? -1 : 1;
	}
}

/////////////////////////////////////////////////////////////
// TEST CASES
/////////////////////////////////////////////////////////////

// var weights = {
// 	1: 1,
// 	3: 4,
// 	4: 5,
// 	5: 7
// };

// knapsack(weights, 7); // 9

//Keys are weights, values are stolen good's values.
var weights = {
  10	: 40,
  20	: 55,
  1		: 1,
  5		: 50,
  50	: 147,
};

knapsack(weights, 31) // 106
// knapsack(weights, 50) // 147
// knapsack(weights, 60) // 198