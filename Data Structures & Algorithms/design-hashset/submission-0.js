class MyHashSet {
    constructor() {
         this.set = Array(10000).fill(0).map(() => [])
    }

    /**
     * @param {number} key
     * @return {void}
     */

    hash(key) {
        return key % 10000
    }
    add(key) {
        const arr = this.set[this.hash(key)]
        for (const num of arr) {
            if (num === key) return
        }
        arr.push(key)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const arr = this.set[this.hash(key)]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === key) arr.splice(i, 1)
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const arr = this.set[this.hash(key)]
        for (const num of arr) {
            if (num === key) return true
        }
        return false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
1,000,000 % 10,000