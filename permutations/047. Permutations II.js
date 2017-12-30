/**
 *
 * https://leetcode.com/problems/permutations-ii/description/
 *
 * Given a collection of numbers that might contain duplicates,
 * return all possible unique permutations.
 * 
 * For example,
 * 
 * [1,1,2] have the following unique permutations:
 * 
 * [
 *   [1,1,2],
 *   [1,2,1],
 *   [2,1,1]
 * ]
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

    var hash    = {};
    var results = [];

    var permutations = function (pointer) {

        if (pointer === nums.length) {

            var key = nums.join('.');

            if (hash.hasOwnProperty(key) === false) {

                hash[key] = 1;            
                results.push(nums.slice());
            }

            return;
        }

        for (var i = pointer ; i < nums.length ; i++) {

            swap(pointer, i);
            permutations(pointer + 1);
            swap(pointer, i);
        }
    };

    var swap = function (i, j) {

        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    };

    permutations(0);
    return results;
};

permuteUnique([1,1,2]);