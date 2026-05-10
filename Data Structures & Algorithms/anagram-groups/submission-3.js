class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}
        for (const word of strs) {
            const key = this.strKey(word)
            if (!res[key]) res[key] = []
            res[key].push(word)
        }
        return Object.values(res)
    }
    strKey(str) {
            const keyArr = Array.from({length: 26}, () => 0)

            for (const char of str) {
                const index = char.charCodeAt(0) - 97
                keyArr[index]++
            }
            const key = keyArr.join('#')
            return key
    }
}
