/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 *
 * https://leetcode.com/problems/combination-sum/
 */
var combinationSum = function(candidates, target) {
    
    var results = [];
    var combinations = {};

    function addCoins(coins, total, combo) {
    
        if (total === target) {
            results.push(combo);
            return;
        }
        
        if (total > target) {
            return;
        }

        for (var i = 0 ; i < coins.length ; i++) {

            var coin    = coins[i];
            var sum     = total + coin;
            
            if (sum <= target) {
                addCoins(coins.slice(i), sum, combo.concat(coin));
            }

            if (sum > target) {
                return;
            }

        }
    }

     for (var i = 0 ; i < candidates.length ; i++) {

        var coin = candidates[i];

        if (coin <= target) {
            addCoins(candidates.slice(i), coin, [coin]);
        }
    }
    
    return results;
};

combinationSum([2,3,5], 7); // [[2,2,3], [2,5]]