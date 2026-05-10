class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        const first = strs[0]
        const length = strs[0].length
        let i = 0

        let letter = 0
        while (letter < length) {
            const curr = strs[0][letter]

            for (let word = 0; word < strs.length; word++) {
                if (curr !== strs[word][letter]) return first.slice(0, letter)
                
            }
            letter++
        }
        return first.slice(0, letter)
    }
}
