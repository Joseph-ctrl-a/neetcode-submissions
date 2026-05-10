class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const stack = []
        const map = {
            ")": "(",
            "]": "[",
            "}": "{"
        }
        const openingParen = new Set(['(', '{', '['])
        const closingParen = new Set([')', ']', '}'])
        for (const paren of s) {
            if (openingParen.has(paren)) stack.push(paren)

            else {
                if (stack.at(-1) !== map[paren]) return false
                stack.pop()
            }
            }
             if (stack.length === 0) return true
             else return false
        }
    
}
