/*jshint expr:true*/

/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10, order: 0}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.
function testingTransform(array) {
	return array.map(function(el, i) {
		return { value: el, order: i };
	});
}

function resultTransform(array) {
	return array.map(function (el) {
		return el.order;
	});
}


function insertionSort(array) {

	for (var i = 1 ; i < array.length; i++) {

		var left  	= array.slice(0, i);
		var swap_i 	= binarySearchCompare(left, array[i].order);
		var to_swap = array[swap_i];

		array[swap_i] 	= array[i];
		array[i] 		= to_swap;
	}

	function binarySearchCompare(arr, target) {

		if (arr.length === 1) {
			return arr[0].order === target ? arr[0].order : target;
		}

		var half 	= arr.length / 2;
		var right 	= arr.slice(half);
		var left 	= arr.slice(0, half);
		var compare = left[left.length-1].order > target ? left : right;

		return binarySearchCompare(compare, target);
	}

	return resultTransform(array);
}


insertionSort(testingTransform([5,5,4,3,2,1]));