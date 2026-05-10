class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []

        const opperations = new Set(["+", "/", "*", "-"])

        for (const token of tokens) {
            
            if (opperations.has(token)) {
                const a = stack.pop()
                const b = stack.pop()
                
                const result = this.eval(token, a, b)
                stack.push(result)
                continue
            }
            stack.push(Number.parseInt(token))
        }
        return stack.pop()
    }

    eval(opperand, a, b) {
        console.log(a ,b)
        let res = 0
        if (opperand === '+') {
            res = b + a
        }
        else if (opperand === '-') {
            res = b - a
        }
        else if (opperand === '/') {
            res = Math.trunc(b / a)
        }
        else if (opperand === '*') {
            res = b * a
        }
        return res
    }

}
