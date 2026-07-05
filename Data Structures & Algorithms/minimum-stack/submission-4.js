class MinStack {
    constructor() {
        this.stack = [];
        this.mins = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.mins.length === 0 || val <= this.mins.at(-1)) {
            this.mins.push(val);
        } else {
            this.mins.push(this.mins.at(-1))
        }
    }

    /**
     * @return {void}
     */
    pop() {
       this.stack.pop()
       this.mins.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.mins.at(-1)
    }
}
[10, 9][(10, 9)];
