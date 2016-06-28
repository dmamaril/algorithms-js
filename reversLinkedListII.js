/**
 * 
 * Total Accepted: 75575 Total Submissions: 265977 Difficulty: Medium
 * Reverse a linked list from position m to n. Do it in-place and in one-pass.
 * 
 * For example:
 * Given 1->2->3->4->5->NULL, m = 2 and n = 4,
 * 
 * return 1->4->3->2->5->NULL.
 * 
 * Note:
 * Given m, n satisfy the following condition:
 * 1 ≤ m ≤ n ≤ length of list.
 */


/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    
    var leftPointer     = 0;
    var rightPointer    = n;
    
    var recurse = function recurse(node) {
    
        leftPointer++;

        if (leftPointer < m) {
            return recurse(node.next);
        }
    
        var nodeToSwap  = node;
        
        for (var i = leftPointer ; i < rightPointer ; i++) {
            nodeToSwap = nodeToSwap.next;
        }
        
        var nodeVal       = node.val;
        node.val          = nodeToSwap.val;
        nodeToSwap.val    = nodeVal;
        
        if (leftPointer + 1 <= n) {
            rightPointer--;
            recurse(node.next);
        }
    };

    recurse(head);
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);


reverseBetween(list);