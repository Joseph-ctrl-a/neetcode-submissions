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
     * @return {boolean}
     */
    hasCycle(head) {
        const seen = new Set()
        let currentNode = head
        while (currentNode) {
            if (seen.has(currentNode)) return true
            seen.add(currentNode)
            currentNode = currentNode.next
        }
        return false
    }
}
