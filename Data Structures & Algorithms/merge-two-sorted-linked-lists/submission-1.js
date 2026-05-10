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
        if (!list1) return list2;
        if (!list2) return list1;

        let currentNode;
        let node2
        let head
        if (list1?.val <= list2?.val) {
            currentNode = list1
            node2 = list2
            head = list1
        }
        else {
            currentNode = list2
            node2 = list1
            head = list2
        }

        while (currentNode) {
           if (!node2) break;
           if (!currentNode.next) {
                currentNode.next = node2
                break
           }
           else if (currentNode?.next.val >= node2?.val) {
                const tempNode = currentNode.next
                currentNode.next = node2

                node2 = node2.next
                currentNode.next.next = tempNode

            }
            currentNode = currentNode.next
        }
        return head
    }
// [1,1,1,1,2,3,4] [5]

}
