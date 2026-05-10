class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}
        for (const word of strs) {
            const keyArr = Array.from({length: 26}, () => 0)

            for (const char of word) {
                const index = char.charCodeAt(0) - 97
                keyArr[index]++
            }
            const key = keyArr.join('#')
            if (!res[key]) res[key] = []
            res[key].push(word)
        }
        return Object.values(res)
    }
}
