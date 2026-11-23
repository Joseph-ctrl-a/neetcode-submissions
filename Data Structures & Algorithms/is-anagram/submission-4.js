class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const counter = new Array(26).fill(0)

        if (s.length !== t.length) return false

        const n = s.length

        for (let i = 0; i < n; i++) {
            const sIndex = s[i].charCodeAt(0) - 97
            const tIndex = t[i].charCodeAt(0) - 97

            counter[sIndex]++
            counter[tIndex]--
        }
        return counter.every(num => !num)
    }
}
