class MinStack {
    constructor() {
        this.minStack = []
        this.stack = []
    }
    minStack = []
    stack = []
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if (val <= this.minStack.at(-1) || !this.minStack.length) this.minStack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
       const val = this.stack.pop()
        if (val === this.minStack.at(-1)) this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1)
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.at(-1)
    }
}
