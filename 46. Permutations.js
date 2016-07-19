/**
 * 46. Permutations
 * https://leetcode.com/problems/permutations/
 * 
 * Given a collection of distinct numbers, return all possible permutations.
 * 
 * For example,
 * 
 * [1,2,3] have the following permutations:
 * 
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    var results = [];
    
    var recurse = function (arr, combo) {
        
        combo = combo || [];
        
        for (var i = 0 ; i < arr.length ; i++) {
    
            var n       = arr.splice(i, 1)[0]; // pull el out;
            var copy    = arr.slice();
            
            if (arr.length === 0) {
                results.push(combo.concat(n));
            }

            recurse(copy, combo.concat(n));
            arr.splice(i, 0, n); // put el back;
        }
        
        return results;
    }; 
   
    return recurse(nums);
};