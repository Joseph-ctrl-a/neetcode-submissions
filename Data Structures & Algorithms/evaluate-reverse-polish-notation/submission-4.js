class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */

    doOpperation(opperator, a, b) {
        let sum = 0
        if (opperator === '+') {
            sum = b + a
        }
        else if (opperator === '-') {
            sum = b - a
        }
        else if (opperator === '/') {
            sum = Math.trunc(b / a)
        }
        else {
            sum = b * a
        }
        return sum
    }
    evalRPN(tokens) {
        const opperands = new Set(["+", '-', '*', '/'])
        const stack = []

        for (const token of tokens) {
            if (opperands.has(token)) {
                    const a = stack.pop()
                    const b = stack.pop()
                    const sum = this.doOpperation(token, a, b)
                    stack.push(sum)
                    continue
            }
            stack.push(Number.parseInt(token))
        }
        return stack.at(-1)

    }
}
