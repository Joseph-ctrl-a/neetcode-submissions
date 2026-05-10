class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const seen = Array(26).fill(0)

        if (s.length !== t.length) return false

        for (let i = 0; i < s.length; i++) {
            const sIndex = s[i].charCodeAt(0) - 97
            const tIndex = t[i].charCodeAt(0) - 97

            seen[sIndex]++
            seen[tIndex]--
        }

        return seen.every(num => num === 0)
    }
}
