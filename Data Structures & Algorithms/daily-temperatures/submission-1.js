class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []
        const res = Array(temperatures.length).fill(0)
        for (const [i, value] of temperatures.entries()) {
            while (stack.length && value > temperatures[stack.at(-1)]) {
                    const stackIndex = stack.pop() // 0
                    res[stackIndex] = i - stackIndex
            }
            if (stack.length === 0 || value <= temperatures[stack.at(-1)]) stack.push(i)
        }
        return res
    }
}

