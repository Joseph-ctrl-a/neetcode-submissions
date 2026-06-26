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
        if (head.next === null) {
            return null
        }
        let slow = head
        let fast = head

        let i = n

        while (i > 0) {
            fast = fast.next
            i--
        }
        if (!fast) {
            return slow.next
        }
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next
        }

        slow.next = slow?.next?.next
        return head
    }
}


