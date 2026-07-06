class StockSpanner {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let span = 1
        while (this.stack.length && price >= this.stack.at(-1)[0]) {
            const [val, oldSpan] = this.stack.pop()
            span += oldSpan
        }
        this.stack.push([price, span])
        return span
    }
}
// insert = 12
// span = 3
// []
/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
