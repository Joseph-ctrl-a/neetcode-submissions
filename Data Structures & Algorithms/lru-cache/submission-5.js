class LinkedList {
    constructor() {
        this.head = new Node(null, null)
        this.tail = new Node(null, null)

        this.head.next = this.tail
        this.tail.prev = this.head
    }

    insert(node) {
        const lastNode = this.tail.prev

        lastNode.next = node

        node.prev = lastNode
        node.next = this.tail

        this.tail.prev = node
    }

    remove(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }
}

class Node {
    constructor(key, val, next = null, prev = null) {
        this.key = key
        this.val = val
        this.next = null
        this.prev = null
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map()
        this.list = new LinkedList()
        this.capacity = capacity
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key)
            this.list.remove(node)
            this.list.insert(node)
            return node.val
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // Update the value of the key if the key exists
        if (this.cache.has(key)) {
            const node = this.cache.get(key)
            node.val = value
            this.list.remove(node)
            this.list.insert(node)
        }
        // add the key-value pair to the cache.

        else {
            const node = new Node(key, value)
            this.cache.set(key, node)
            this.list.insert(node)
        }

        if (this.cache.size > this.capacity) {
            const node = this.list.head.next
            this.cache.delete(node.key)
            this.list.remove(node)
        }
    }
}

