/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queues {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    enqueue(val) {
        if (!val) return
         const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
    }

    dequeue() {

        const node = this.head
        this.head = this.head.next

        node.next = null

        if (!this.head) this.tail = null
        this.length--
        return node
    }
}
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        const res = []
        const queue = new Queues()
        queue.enqueue(root)
        console.log(queue)
        while (queue.length) {
            const levelSize = queue.length

            for (let i = 0; i < levelSize; i++) {
                const node = queue.dequeue()
                if (i === 0) res.push(node.val.val)

                console.log(node.val)
                if (node?.val?.right) queue.enqueue(node.val.right)
                if (node?.val?.left) queue.enqueue(node.val.left)
            }
        }
        return res
    }
}
