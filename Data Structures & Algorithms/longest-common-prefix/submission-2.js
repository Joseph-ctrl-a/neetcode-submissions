class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        const length = strs[0].length
        let letter = 0
        for (let i = 0; i < length; i++) {
            const char = strs[0][i]
            if (strs.every(str => str[i] === char)) {
                letter++
            } else {
                break
            }
        }
        return strs[0].slice(0, letter)
    }
}
