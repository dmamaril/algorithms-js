/**
 * 103. Binary Tree Zigzg Level Order Traversal
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 * 
 * Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 *   
 * return its zigzag level order traversal as:
 * [
 *   [3],
 *   [20,9],
 *   [15,7]
 * ]
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    
    if (root === null) {
        return [];
    }

    var queue   = [root];
    var toggle  = false;
    var results = [];
    var len     = 1;

    while (len) {
    
        var temp = [];
    
        for (var i = 0 ; i < len ; i++) {
    
            var node = queue.shift();
            
            temp.push(node.val);
            
            if (node.left) {
                queue.push(node.left);
            }
            
            if (node.right) {
                queue.push(node.right);
            }
        }

        if (toggle) {
            temp = temp.reverse();
        }
        
        toggle  = !toggle;
        len     = queue.length;

        results.push(temp);
    }

    return results;
};