/**
 *
 * https://leetcode.com/problems/permutations/description/
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
 *  ]
 *  
 */
 var permute = function (nums) {

    var results = [];

    var permutations = function (pointer) {

        if (pointer === nums.length) {
            results.push(nums.slice());
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

 permute([1,2,3]);