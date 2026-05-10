/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
    let prev = null
    let currentNode = head

    while (currentNode) {
        const nextNode = currentNode.next
        currentNode.next = prev
    	prev = currentNode
        currentNode = nextNode
    }
    return prev
    }
    //  null <= 1 => 2 => 3 => 4 => 5
}
// 
