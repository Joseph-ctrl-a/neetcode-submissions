class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let openParens = new Set(['(', '[', '{'])
        let parensMap = new Map([['}', '{'],[')', '('],[']', '[']])
        for (const paren of s) {
            if (openParens.has(paren)) stack.push(paren)
            else if (parensMap.get(paren) !== stack.pop()) return false
        }
        return stack.length === 0

    }
}
// [(