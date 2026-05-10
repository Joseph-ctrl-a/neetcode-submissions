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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (!head.next) return null
        let fast = head
        let slow = head
        for (let i = 0; i < n; i++) {
             fast = fast?.next
        }
        if (!fast) return slow.next
        while (fast?.next) {
            slow = slow.next
            fast = fast.next
        }

        slow.next = slow.next.next
        
        return head

    }
}
