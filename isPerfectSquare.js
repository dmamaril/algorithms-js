/**
 * 367. Valid Perfect Square
 * https://leetcode.com/problems/valid-perfect-square/
 * 
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 * 
 * Note: Do not use any built-in library function such as sqrt.
 * 
 * Example 1:
 * 
 * Input: 16
 * Returns: True
 * 
 * Example 2:
 * 
 * Input: 14
 * Returns: False
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

    var num_to_square   = (num % 2 === 0) ? 2 : 1;
    var squared         = num_to_square * num_to_square;
    
    while(squared <= num && num_to_square) {
    
        if (squared === num) {
            return true;
        }
        
        num_to_square += 2;
        squared = num_to_square * num_to_square;
    }
    
    return false;
};