class Node {
    constructor(key, val, next = null, prev = null) {
        this.key = key
        this.val = val
        this.next = next
        this.prev = prev
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null


        this.head = new Node(0,0)
        this.tail = new Node(0,0)

        this.head.next = this.tail
        this.tail.prev = this.head
    }
    insert(node) {
        const prev = this.tail.prev
        prev.next = node
        node.prev = prev
        node.next = this.tail
        this.tail.prev = node
    }

    remove(node) {
            node.prev.next = node.next
            node.next.prev = node.prev
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.store = new Map()
        this.list = new LinkedList()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.store.has(key)) {
            // Update its position within our list
            const node = this.store.get(key)
            this.list.remove(node)
            this.list.insert(node)
            // Return the value
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
        if (this.store.has(key)) {
            const node = this.store.get(key)

            // update the value of the key
            node.val = value

            // update its positon within our list
            this.list.remove(node)
            this.list.insert(node)

        } else {
            const node = new Node(key, value)
            this.store.set(key, node)
            this.list.insert(node)
        }
        if ( this.store.size > this.capacity) {
            const lru = this.list.head.next
            this.list.remove(lru)
            this.store.delete(lru.key)
        }

    }
}




