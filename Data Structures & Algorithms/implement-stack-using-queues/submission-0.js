
class MyStack {
    constructor() {
        this.queue = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        let length = this.queue.length
        this.queue.push(x)       
        for (let i = 0; i < length; i++) {
           const num = this.queue.shift()
           this.queue.push(num)
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.queue.shift()
    }

    /**
     * @return {number}
     */
    top() {
        return this.queue.at(0)
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
