class FreqStack {
    constructor() {
        this.freqs = new Map()
        this.stack = new Map()
        this.mostFreq = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const freq = (this.freqs.get(val) || 0) + 1
        this.freqs.set(val, freq)

        if (!this.stack.has(freq)) this.stack.set(freq, [])
        this.stack.get(freq).push(val)
        this.mostFreq = Math.max(this.mostFreq, freq)
    }

    /**
     * @return {number}
     */
    pop() {
        const mostFreq = this.stack.get(this.mostFreq)
        
        const res = mostFreq.pop()
        this.freqs.set(res, this.freqs.get(res) - 1)

        if (mostFreq.length === 0) this.mostFreq--
        return res
    }
}
// {
//     1: 3
//     2: 1
// }

// {
//     1: [1,2]
//     2: [1]
//     3: []
// }
/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */


// if the value that we're pushing in freqs >= top of stack we push it in