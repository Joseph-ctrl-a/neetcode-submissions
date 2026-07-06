class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []
        const res = new Array(temperatures.length).fill(0)
        for (const [i, temperature] of temperatures.entries()) {
            while (stack.length && temperature > temperatures[stack.at(-1)]) {
                const index = stack.pop()
                res[index] = i - index
            }
            stack.push(i)
        }
        return res
    }
}


