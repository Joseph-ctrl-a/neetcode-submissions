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
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head

        while (fast && fast.next) {
            fast = fast.next?.next
            slow = slow?.next
        }
        let mid = slow
        let prev = null
        let curr = mid.next
        mid.next = null
        while (curr) {
            const temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        
        let first = head;
        let second = prev;

        while (second) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}
// 6 => null =>