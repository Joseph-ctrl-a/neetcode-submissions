class Node {
    constructor(key, value, next = null, prev = null) {
        this.key = key
        this.value = value
        this.next = next
        this.prev = prev
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.tail = null
        this.head = null
        this.nodeMap = new Map() // The key
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.nodeMap.has(key)) return -1

        const node = this.nodeMap.get(key)
        this.remove(key)
        this.insert(node)
        return node.value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.nodeMap.has(key)) {
            const node = this.nodeMap.get(key)
            node.value = value
            this.remove(key)
            this.insert(node)
        }

        if (!this.nodeMap.has(key)) {
            const node = new Node(key, value)
            this.nodeMap.set(key, node)
            this.insert(node)
        }
        if (this.nodeMap.size > this.capacity) {
            const key = this.head.key

            this.remove(key)
            this.nodeMap.delete(key)

        }
    }

    insert(node) {
        if (!this.tail) {
            this.tail = node
            this.head = node
            return
        }
        node.prev = this.tail
        this.tail.next = node
        this.tail = node

    }
    remove(key) {
    const node = this.nodeMap.get(key);

    if (!node.prev && !node.next) {
        this.tail = null;
        this.head = null
    } 
    else if (!node.prev) {
        this.head = node.next
        node.next.prev = null;
    }
    else if (!node.next) {
        node.prev.next = null;
        this.tail = node.prev;
    } 
    else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    node.prev = null;
    node.next = null;
    }
}