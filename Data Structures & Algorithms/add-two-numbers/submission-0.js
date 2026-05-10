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
    
        // l1 = this.reverseList(l1)
        // l2 = this.reverseList(l2)

        let carry = 0
        let head = null
        let tail = null
        while (l1 || l2 || carry) {
            let sum = 0
            sum += l1?.val ?? 0
            sum += l2?.val ?? 0
            sum += carry

            const digit = sum % 10
            const node = new ListNode(digit, null)
            if (!head) {
                head = node
                tail = node
            }
            else {
                tail.next = node
                tail = tail.next
            }
            carry = Math.floor(sum / 10)

            l1 = l1?.next
            l2 = l2?.next
        }
        return head
    }
    secondSolution(l1, l2) {
        let sum = 0
        let multiplier = 1

        let oneNode = l1
        let twoNode = l2

        while (oneNode || twoNode) {
            if (oneNode) {
                sum += oneNode?.val * multiplier
            }
            if (twoNode) {
                sum += twoNode?.val * multiplier
            }

            multiplier *= 10
            oneNode = oneNode.next
            twoNode = twoNode.next
        }
        console.log(sum)
    }

    reverseList(list) {
        let curr = list
        let prev = null

        while (curr) {
            const temp = curr.next
            curr.next = prev

            prev = curr
            curr = temp
        }
        return prev
    }
}
