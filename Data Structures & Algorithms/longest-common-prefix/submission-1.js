class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const prefix = []

        const length = strs[0].length

        for (let i = 0; i < length; i++) {
            const char = strs[0][i]
            if (strs.every(str => str[i] === char)) {
                prefix.push(char)
            } else {
                break
            }
        }
        return prefix.join('')
    }
}
