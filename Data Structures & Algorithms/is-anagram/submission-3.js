class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const seen = new Array(26).fill(0)

        if (s.length !== t.length) return false
        for (let i = 0; i < s.length; i++) {
            const sChar = s[i].charCodeAt(0) - 97
            const tChar = t[i].charCodeAt(0) - 97

            seen[sChar]++
            seen[tChar]--
        }
        return seen.every(n => !n)
    }
}
