class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = []
        let res = 0
        for (const op of operations) {
            if (op === "+") {
                const sum = stack.at(-1) + stack.at(-2)
                res += sum
                stack.push(sum)
            } 
            else if (op === 'D') {
                const sum = stack.at(-1) * 2
                res += sum
                stack.push(sum)
            }
            else if (op === 'C') {
                res -= stack.pop()

            } else {
                stack.push(Number(op))
                res += Number(op)
            }
        }
        console.log(stack)
        return res
    }
}
[]