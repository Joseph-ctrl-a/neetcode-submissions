class FreqStack {
    constructor() {
        this.freq = new Map()
        this.groups = new Map()
        this.mostFreq = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.freq.set(val, (this.freq.get(val) || 0) + 1)

        const freq = this.freq.get(val)
        if (!this.groups.has(freq)) this.groups.set(freq, [])

        this.groups.get(freq).push(val)

        this.mostFreq = Math.max(freq, this.mostFreq)
    }

    /**
     * @return {number}
     */
    pop() {
        const arr = this.groups.get(this.mostFreq)
        
        const res  = arr.pop()
        this.freq.set(res, this.freq.get(res) - 1)

        if (arr.length === 0) this.mostFreq--
        return res
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
// we need to be able to count the freqs so use



