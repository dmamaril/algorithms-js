/**
 * 042. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/
 *
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * For example, 
 * 
 * Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    if (!Array.isArray(height) || height.length === 0) {
        return 0;
    }
    
    var left_pointer    = 0;
    var right_pointer   = height.length - 1;
    
    var rain        = 0;
    var current_min = 0;
    
    while (left_pointer < right_pointer) {
        
        var left_height     = height[left_pointer];
        var right_height    = height[right_pointer];
        
        if (left_height <= current_min) {
            rain += current_min - left_height;
            left_pointer++;
            continue;
        }
        
        if (right_height <= current_min) {
            rain += current_min - right_height;
            right_pointer--;
            continue;
        }
        
        current_min = Math.min(left_height, right_height);
    }
    
    return rain;
};