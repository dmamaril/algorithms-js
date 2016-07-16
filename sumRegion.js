/**
 *
 * 304. Range Sum Query 2D - Immutable
 * https://leetcode.com/problems/range-sum-query-2d-immutable/
 * 
 * Given a 2D matrix matrix, 
 * find the sum of the elements inside the rectangle 
 * defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 * 
 * Example:
 * 
 * Given matrix = [
 *     [3, 0, 1, 4, 2],
 *     [5, 6, 3, 2, 1],
 *     [1, 2, 0, 1, 5],
 *     [4, 1, 0, 1, 7],
 *     [1, 0, 3, 0, 5]
 * ]
 * 
 * sumRegion(2, 1, 4, 3) -> 8
 * sumRegion(1, 1, 2, 2) -> 11
 * sumRegion(1, 2, 2, 4) -> 12
 * 
 * Note:
 * You may assume that the matrix does not change.
 * There are many calls to sumRegion function.
 * You may assume that row1 ≤ row2 and col1 ≤ col2.
 */

/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    
    var matrix = this.matrix;
    
    if (matrix.length === 0) {
        return 0;
    }
    
    var maxRow = matrix.length;
    var maxCol = matrix[0].length;
    
    if (row2 > maxRow || col2 > maxCol) {
        return 0;
    }
    
    var sum = 0;
    
    for (var rowIndex = row1 ; rowIndex <= row2 ; rowIndex++) {
    
        for (var colIndex = col1 ; colIndex <= col2 ; colIndex++) {
    
            var val = matrix[rowIndex][colIndex];
            
            if (Number.isInteger(val)) {
                sum += val;
            }
        }
    }
    
    return sum;
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */