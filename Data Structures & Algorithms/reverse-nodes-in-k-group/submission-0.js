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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
      let groups = this.calcReverses(head, k)
      let curr = head
      let prevGroupTail = null
      let startOfGroup = head // This is the start of the group
      let newHead = null // Our return

      while (groups) {
        let prev = null
        let tailOfGroup = curr
        for (let i = 0; i < k; i++) {
            startOfGroup = curr.next
            curr.next = prev
            prev = curr
            curr = startOfGroup
        }
        // prev.next = startOfGroup
        if (prevGroupTail) prevGroupTail.next = prev
        if (!newHead) {
            newHead = prev
        }
        tailOfGroup.next = startOfGroup
        prevGroupTail = tailOfGroup
        groups--
      }
      return newHead
    }
    calcReverses(head, k) {
        if (!head) return null
        let currNode = head
        let length = 0
        while (currNode) {
            length++
            currNode = currNode.next
        }


        return Math.floor(length / k)
    }
}
