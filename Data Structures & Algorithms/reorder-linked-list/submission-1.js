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
        const map = {}

        let currNode = head
        let i = 0
        while (currNode) {
            map[i] = currNode
            currNode = currNode.next
            i++
        }

        const length = i
        const dummyNode = new ListNode(0)
        let curr = dummyNode

        let left = 0
        let right = length - 1
        let j = 0
        while (left <= right) {
            if (j % 2 === 0) {
                curr.next = map[left]
                left++
            } else {
                curr.next = map[right]
                right--
            }
            curr = curr.next
            j++
        }
        curr.next = null
        return dummyNode.next
    }
}


/*

    map = {
        0: {2, next}
        1: {4, next}
        2: {6, next}
        3: {8, next}
    }

    left = 0
    right = 3
    Loop N Times {
        curr.next = map[left OR right] 
        curr = curr.next
    }

 */