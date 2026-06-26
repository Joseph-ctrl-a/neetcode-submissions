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
        

        // Find Middle
        let fast = head.next
        let slow = head
        while (fast?.next) {
            fast = fast.next.next
            slow = slow.next
        }

        let mid = slow

        let curr = mid.next
        let prev = null
        slow.next = null

        // Reverse The list

        while (curr) {
            let temp = curr.next

            curr.next = prev
            prev = curr
            curr = temp
        }

        // Attach the two lists together
        let l1 = head
        let l2 = prev
        let dummyNode = new ListNode(0)
        let currNode = dummyNode
        while (l1 && l2) {
            let list1Temp = l1.next
            let list2Temp = l2.next
            currNode.next = l1
            currNode.next.next = l2

            l1 = list1Temp
            l2 = list2Temp
            currNode = currNode.next.next
        }
        currNode.next = l1

        return head
    }
}

// [2,4] [6,8]

// [2,8,4,6]
