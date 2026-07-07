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
        const dummyNode = new ListNode(0, head)

        let left = dummyNode
        let right = head

        while (n > 0) {
            right = right.next
            n--
        }

        while (right) {
            right = right.next
            left = left.next
        }
        console.log(right ,left)
        left.next = left.next.next
        return dummyNode.next
    }
}
//                R
// [1,2,3,4,[5],6]
//        L     
