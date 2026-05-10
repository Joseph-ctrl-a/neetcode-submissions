/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class QueueNode {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class MyQueue {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    enqueue(value) {
        const node = new QueueNode(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node
            this.tail = this.tail.next
        }
        this.size++
        return true
    }

    dequeue() {
        if (!this.head) return null
        const value = this.head.value
        if (!this.head.next) {
            this.head = null
            this.tail = null
        }
        else {
            this.head = this.head.next
        }
        this.size--
        return value
    }

}
class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || !lists.length) return null
        const queue = new MyQueue()
        while (lists.length >= 2) {
            const l1 = lists.pop()
            const l2 = lists.pop()

            const mergedList = this.mergeLists(l1, l2)
            queue.enqueue(mergedList)
        }
        if (lists.length === 1) queue.enqueue(lists[0])


        while (queue.size >= 2) {
            const l1 = queue.dequeue()
            const l2 = queue.dequeue()

            const mergedList = this.mergeLists(l1, l2)
            queue.enqueue(mergedList)
        }
        return queue.dequeue()
    }

    mergeLists(l1, l2) {    
        const dummyNode = new ListNode(0)
        let tail = dummyNode
        let first = l1
        let second = l2

        while (first && second) {
            if (first.val <= second.val) {
                tail.next = first

                first = first.next
                tail = tail.next
                
            }
            else if (second.val < first.val) {
                tail.next = second
                
                second = second.next
                tail = tail.next
            }
        }
        tail.next = first || second
        return dummyNode.next
    }
}
