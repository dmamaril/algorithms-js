/**
 * 169. Majority Element
 * https://leetcode.com/problems/majority-element/
 *
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * 
 * You may assume that the array is non-empty and the majority element always exist in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    var counts = {};
    var majorityCount = nums.length / 2;
    
    for (var i = 0 ; i < nums.length ; i++) {
        
        var n = nums[i];
        counts[n] = counts[n] || 0;
        counts[n] ++;
        
        if (counts[n] > majorityCount) {
            return n;
        }
    }
};