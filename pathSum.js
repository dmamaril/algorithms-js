/**
 * 
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
 * 
 * For example:
 * Given the below binary tree and sum = 22,
 *               5
 *              / \
 *             4   8
 *            /   / \
 *           11  13  4
 *          /  \    / \
 *         7    2  5   1
 * return
 * [
 *    [5,4,11,2],
 *    [5,8,4,5]
 * ]
 * 
 * Definition for a binary tree node.
 *
 *  function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
* @param {TreeNode} root
* @param {number} target
* @return {number[][]}
*/
var pathSum = function(root, target) {

    var result = [];

    var isValidNode = function (node) {

        var isObject  = typeof node === 'object' && !Array.isArray(node) && node !== null;
        var hasVal    = isObject && !isNaN(node.val);

        return isObject && hasVal;
    };

    if (!isValidNode(root)) {
        return [];
    }

    if (root.val > target) {
        return [];
    }

    var recurse = function (node, sum, set) {
        if (sum === target) {
            result.push(set);
            return;
        }

        if (sum > target) {
            return;
        }

        var left = node.left;
        var right = node.right;

        if (isValidNode(left)) {
            recurse(left, sum + left.val, set.concat(left.val));
        }

        if (isValidNode(right)) {
          recurse(right, sum + right.val, set.concat(right.val));
        }
    };

    recurse(root, root.val, [root.val]);
    return result;
};

function TreeNode(val) {
this.val = val;
this.left = this.right = null;
}

var bst = new TreeNode(5);
bst.left = new TreeNode(4);
bst.left.left = new TreeNode(11);
bst.left.left.left = new TreeNode(7);
bst.left.left.right = new TreeNode(2);

bst.right = new TreeNode(8);
bst.right.left = new TreeNode(13);
bst.right.right = new TreeNode(4);
bst.right.right.left = new TreeNode(5);
bst.right.right.right = new TreeNode(1);

pathSum(bst, 22);