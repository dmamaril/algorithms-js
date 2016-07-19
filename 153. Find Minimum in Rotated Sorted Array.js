/**
 * 153. Find Minimum in Rotated Sorted Array
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * 
 * Suppose a sorted array is rotated at some pivot unknown to you beforehand.
 * 
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * 
 * Find the minimum element.
 * 
 * You may assume no duplicate exists in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    var left  = 0;
    var right = nums.length - 1;
    
    while (left < right) {
        
        var mid         = Math.floor((left + right) / 2);
        var right_el    = nums[right];
        var mid_el      = nums[mid];
        
        // use right half for next compare;
        if (mid_el > right_el) {
            left = mid + 1;
        
        // use left half for next compare;
        } else {
            right = mid;
        }
    }
    
    // eventually you're left with the last element which shoudl be the smallest
    return nums[left];
};