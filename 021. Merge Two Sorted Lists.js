/**
 * 021. Merge Two Sorted Lists
 * 
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two lists.
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 *
 *  O(n);
 *
 *  create root list;
 *  update nexts
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

    var next1, next2, root, list;
    
    if (!l1 || l1.val === undefined || !l2 || l2.val === undefined) {
        return l1 || l2;
    }
    
    if (l1.val < l2.val) {
        
        root = list = new ListNode(l1.val);
        next1 = l1.next;
        next2 = l2;
        
    } else {
        
        root = list = new ListNode(l2.val);
        next2 = l2.next;
        next1 = l1;
    }
    
    while (next1 || next2) {
        
        if (!next1) {
            list.next = next2;
            break;
        }
        
        if (!next2) {
            list.next = next1;
            break;
        }
        
        if (next1.val < next2.val) {
            
            list.next   = new ListNode(next1.val);
            next1       = next1.next;
            
        } else {
            
            list.next   = new ListNode(next2.val);
            next2       = next2.next;
        }
        
        list = list.next;
    }
    
    return root;
};