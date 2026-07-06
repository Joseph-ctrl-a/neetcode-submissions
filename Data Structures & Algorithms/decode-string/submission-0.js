class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = []
        for (const char of s) {
            if (char !== ']') {
                stack.push(char)
            } else {
                let substring = ''
                while (stack.at(-1) !== '[') {
                    substring = stack.pop() + substring
                }
                // substring = 'b'
                stack.pop()
                let k = '' 
                while (stack.length && stack.at(-1) >= '0' && stack.at(-1) <= '9') {
                        k = stack.pop() + k
                }
                stack.push(substring.repeat(Number(k)))
            }
        }
        return stack.join('')
    }
}
