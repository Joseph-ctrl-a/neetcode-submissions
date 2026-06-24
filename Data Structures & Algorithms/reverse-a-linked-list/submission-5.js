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
     * @param {ListNode} curr
     * @return {ListNode}
     */
    reverseList(curr, prev = null) {
        if (!curr) return prev

        const temp = curr.next
        curr.next = prev
        return this.reverseList(temp, curr)
    }
}
// curr.next needs to be set to prev before i change prev
// [0,1,2,3]
//  0 => null

