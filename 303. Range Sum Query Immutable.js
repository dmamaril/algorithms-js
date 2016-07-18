/**
 * 303. Range Sum Query Immutable
 * https://leetcode.com/problems/range-sum-query-immutable/
 * 
 * Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
 * 
 * Example:
 * Given nums = [-2, 0, 3, -5, 2, -1]
 * 
 * sumRange(0, 2) -> 1
 * sumRange(2, 5) -> -1
 * sumRange(0, 5) -> -3
 * 
 * Note:
 * You may assume that the array does not change.
 * There are many calls to sumRange function.
 * 
 */

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {

    for (var i = 1 ; i < nums.length; i++) {
        nums[i] += nums[i-1];
    }
    
    this.nums = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    
    
    var len = this.nums.length;
    
    if (i > len || j > len || i > j) {
        return 0;
    }
    
    return i === 0 ? this.nums[j] : this.nums[j] - this.nums[i-1];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */