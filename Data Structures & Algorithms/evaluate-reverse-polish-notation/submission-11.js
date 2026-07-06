class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        const opperands = new Set(['+', '-', '*', '/'])
        for (const token of tokens) {
            if (!opperands.has(token)) {
                stack.push(Number(token))
            } else {
                const num1 = stack.pop() // 17
                const num2 = stack.pop() // 0
                
  


                if (token === '+') {
                    stack.push(num1 + num2)
                }
                if (token === '-') {
                    stack.push(num2 - num1)
                }
                if (token === '*') {
                    stack.push(num2 * num1)
                }
                if (token === '/') {
                    const res = Math.trunc(num2 / num1)
                    stack.push(res)
                }
            }
        }
        console.log(stack)
        return stack.pop()
    }
}

// tokens=["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
//                                                              ^
// stack = [17,5]





