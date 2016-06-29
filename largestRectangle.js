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

    var min         = heights[0];
    var sum         = heights[0];
    var maxSoFar    = heights[0];
    var updateIndex = 0;
  
    var updateSum = function (index) {
    
        var newSum = 0;
        var currentHeight = heights[index];
        
        for (var i = updateIndex ; i <= index ; i++) {
            
            var height = heights[index];
            
            if (height >= currentHeight) {
                newSum += currentHeight;
            }
        }
        
        sum         = newSum;
        maxSoFar    = Math.max(newSum, maxSoFar);
    };
  
    for (var i = 1 ; i < heights.length ; i++) {
        
        var height = heights[i];
    
        if (min > height) {
    
            min = height;
            updateSum(i);
            continue;
        } 
        
        var newSum  = sum + min;
        sum         = Math.max(newSum, height);
        maxSoFar    = Math.max(sum, maxSoFar);

        if (newSum <= height) {
            updateIndex = i;
            min         = height;
        }
    }
    
    
    return maxSoFar || 0;
};

largestRectangleArea([2,1,5,6,2,3]);
largestRectangleArea([1,2,3,4,5]);
largestRectangleArea([1,2,2]);