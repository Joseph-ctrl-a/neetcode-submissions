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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        const dummy = new ListNode(0, head);
        let nodeBeforeLeft = dummy;

        for (let i = 0; i < left - 1; i++) {
            nodeBeforeLeft = nodeBeforeLeft.next;
        }

        let curr = nodeBeforeLeft.next;
        let prev = null;
        const nodeAfterRight = curr;

        for (let i = 0; i <= right - left; i++) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        nodeBeforeLeft.next = prev;
        // need to find the actual tail of the reversed segment to attach curr
        let tail = prev;
        while (tail.next) tail = tail.next;
        tail.next = curr;

        return dummy.next;
}
}
