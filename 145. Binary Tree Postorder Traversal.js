/**
 * 145. Binary Tree Postorder Traversal
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 * 
 * Given a binary tree, return the postorder traversal of its nodes' values.
 * 
 * For example:
 * Given binary tree {1,#,2,3},
 *    1
 *     \
 *      2
 *     /
 *    3
 * return [3,2,1].
 * 
 * Note: Recursive solution is trivial, could you do it iteratively?
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    
    if (root === null) {
        return [];
    }
    
    var stack   = [root];
    var results = [];
    
    while (stack.length) {
    
        root = stack.pop();
        results.unshift(root.val);
        
        if (root.left) {
            stack.push(root.left);
        }
        
        if (root.right) {
            stack.push(root.right);
        }
    }
    
    
    return results;
};