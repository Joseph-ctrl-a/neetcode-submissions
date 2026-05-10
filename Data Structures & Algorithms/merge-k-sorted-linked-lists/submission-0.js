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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || lists.length === 0) return null

        while (lists.length >= 2) {
            const l1 = lists.pop()
            const l2 = lists.pop()

            const mergedList = this.mergeList(l1, l2)
            lists.push(mergedList)
        }
        return lists[0]
    }

    mergeList(l1, l2) {
        const dummy = new ListNode(0)
        let tail = dummy
        let first = l1
        let second = l2

        while (first && second) {
            if (first.val <= second.val) {
                tail.next = first

                first = first.next
                tail = tail.next
            }
            else {
                tail.next = second

                second = second.next
                tail = tail.next
            }
        }
            tail.next = first || second
            return dummy.next
    }
}