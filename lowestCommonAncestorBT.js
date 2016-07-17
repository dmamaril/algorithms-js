/**
 * 236. Lowest Common Ancestor of a Binary Tree
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * 
 * According to the definition of LCA on Wikipedia:
 * “The lowest common ancestor is defined between two nodes v and w 
 * as the lowest node in T that has both v and w as descendants 
 * (where we allow a node to be a descendant of itself).”
 * 
 *         _______3______
 *        /              \
 *     ___5__          ___1__
 *    /      \        /      \
 *    6      _2       0       8
 *          /  \
 *          7   4
 *          
 * For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3.
 * Another example is LCA of nodes 5 and 4 is 5, 
 * since a node can be a descendant of itself according to the LCA definition.
 */


/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    var descendants = {};
    descendants[p]  = 1;
    descendants[q]  = 1;

    var candidate;
    
    if (descendants[root.val]) {
        candidate = root.val;
        delete descendants[root.val];
    }
    
    var getDescendantLen = function () {
        return Object.keys(descendants).length;
    };
    
    var findDescendants = function (node) {
    
        if (node === null) {
            return;
        }
        
        if (descendants[node.val]) {
    
            delete descendants[node.val];
            
            // early exit if both have been found;
            if (getDescendantLen() === 0) {
                return;
            }
        }

        findDescendants(node.left);
        findDescendants(node.right);
    }
    
    findDescendants(root.left);
    
    var desc_len = getDescendantLen();

    // return either the root (if root was what we were looking for)
    // or return both descendnats were found in left side;
    if (desc_len === 0) {
        return candidate || root.left.val;
    }

    // one exists in left side of tree;
    if (desc_len === 1) {
        candidate = root.val;
    }

    // descendants werent found in left side of the tree
    // it may be the case that it belongs in the right side;
    if (desc_len === 2) {
        candidate = root.right.val;
    }

    findDescendants(root.right);

    desc_len = getDescendantLen();

    if (desc_len === 0) {
        return candidate;
    }
};

var Tree = function (val) {
    this.val = val;
    this.left = this.right = null;
};

var tree = new Tree(3);
tree.left = new Tree(5);
tree.left.left = new Tree(6);
tree.left.right = new Tree(2);
tree.left.right.left = new Tree(7);
tree.left.right.right = new Tree(4);
tree.right = new Tree(1);
tree.right.left = new Tree(0);
tree.right.right = new Tree(8);

lowestCommonAncestor(tree, 5, 4);