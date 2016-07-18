/**
 * 343. Integer Break  QuestionEditorial Solution
 * https://leetcode.com/problems/integer-break/
 * 
 * Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.
 * 
 * For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).
 * 
 * Note: You may assume that n is not less than 2 and not larger than 58.
 * 
 * Hint:
 * 
 * There is a simple O(n) solution to this problem.
 * You may check the breaking results of n ranging from 7 to 10 to discover the regularities.
 */

/**
 * 
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {

    var memo = [0, 0, 1, 2, 4, 6, 9];
    
    if (memo[n]) {
        return memo[n];
    }
    
    for (var i = 7 ; i <= n ; i++) {
        memo[i] = memo[i-3] * 3;
        
        if (i === n) {
            return memo[i];
        }
    }
};