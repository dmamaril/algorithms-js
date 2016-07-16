/**
 * 
 * 107. Binary Tree Level Order Traversal II 
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
 * 
 * Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
 * 
 * For example:
 * 
 * Given binary tree [3,9,20,null,null,15,7],
 *      3
 *     / \
 *    9  20
 *      /  \
 *     15   7
 *     
 * return its bottom-up level order traversal as:
 * 
 * [
 *     [15,7],
 *     [9,20],
 *     [3]
 * ]
 */


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {

    var set = [];
    
    if (root === null) {
        return set;
    }
    
    function recurse(node, depth) {

        set[depth] = set[depth] || [];
        set[depth].push(node.val);
        
        if (node.left) {
            recurse(node.left, depth + 1, set);
        }

        if (node.right) {
            recurse(node.right, depth + 1, set);
        }
    }

    recurse(root, 0);
    return set.reverse();
};