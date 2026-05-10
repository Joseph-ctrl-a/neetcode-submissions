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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let dummyNode = new ListNode(0)
        let tail = dummyNode

        let first = list1
        let second = list2

        while (first && second) {
            if (first.val <= second.val) {
                tail.next = first
                
                tail = tail.next
                first = first?.next
            }
            else if (second.val <= first.val){
                tail.next = second

                tail = tail.next
                second = second?.next
            }
        }
        tail.next = first || second
        return dummyNode.next
    }
}
[4,6,8,11,12]
[2,3]