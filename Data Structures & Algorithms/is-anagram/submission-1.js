class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const counter = Array.from({length: 26}, () => 0)

        if (s.length !== t.length) return false

        for (let i = 0; i < s.length; i++) {
            const sIndex = s[i].charCodeAt(0) - 97
            const tIndex = t[i].charCodeAt(0) - 97
            counter[sIndex]++
            counter[tIndex]--
        }
        return counter.every(num => num === 0)
    }
}

