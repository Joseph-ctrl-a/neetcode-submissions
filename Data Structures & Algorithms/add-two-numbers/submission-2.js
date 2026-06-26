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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummyNode = new ListNode(0)
        let head = dummyNode
        let remainder = 0
        while (l1 || l2 || remainder) {
            let sum = 0
            sum += l1?.val || 0
            sum += l2?.val || 0
            sum += remainder
            // sum =  14
            remainder = Math.floor(sum / 10)
            const res =  sum % 10 

            head.next = new ListNode(res)

            l1 = l1?.next
            l2 = l2?.next
            head = head.next
            // 1 => 4 => 5


            
        }
        return dummyNode.next
    }
}

// 5 => 6 => 4
// 6 => 7 

// res = 1 => 