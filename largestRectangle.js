/**
 *
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 * 
 * Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.
 * 
 * Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].
 * 
 * The largest rectangle is shown in the shaded area, which has area = 10 unit.
 * 
 * For example,
 * Given heights = [2,1,5,6,2,3],
 * return 10.
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

    var largest = 0;
    var memo    = {};

    if (!Array.isArray(heights)) return;

    for (var i = 0 ; i < heights.length ; i++) {

        var height  = heights[i];
        var sum     = 0;

        if (memo[height]) continue;

        for (var j = 0 ; j < heights.length ; j++) {

            var innerHeight = heights[j];

            if (height <= innerHeight) {

                sum += height;

                if (sum > largest) largest = sum;
            
            } else {

                sum = 0;
            }

        }
    }

    return largest;
};

// largestRectangleArea([2,1,5,6,2,3]); // 10
// largestRectangleArea([1,2,3,4,5]); // 9
// largestRectangleArea([1,2,2]); // 4
// largestRectangleArea([9, 0]); // 9;