/**
 * 
 * 74. Search a 2D Matrix
 * https://leetcode.com/problems/search-a-2d-matrix/
 *
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 * 
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 * 
 * For example,
 * 
 * Consider the following matrix:
 * 
 * [
 *   [1,   3,  5,  7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 50]
 * ]
 * 
 * Given target = 3, return true.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    if (!Array.isArray(matrix) || matrix.length === 0) {
        return false;
    }
    
    var last_row = matrix[matrix.length - 1];
    
    var min = matrix[0][0];
    var max = last_row[last_row.length - 1];
    
    if (target < min || target > max) {
        return false;
    }
    
    var i   = 0;
    var row = matrix[i];
    
    while(row) {
        
        var max_val = row[row.length - 1];
        
        if (target <= max_val) {
            return row.indexOf(target) !== -1 ? true : false;
        }

        i++;
        row = matrix[i];
    }
    
    return false;
};