class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0
        let right = 0
        let res = 0
        const freq = Array(26).fill(0)
        const seen = new Set()
        let mostFreqChar = 0
        while (right < s.length) {
            seen.add(s[right])
            freq[s[right].charCodeAt(0) - 65]++

            for (const char of seen) {
                mostFreqChar = Math.max(freq[char.charCodeAt(0) - 65], mostFreqChar)
            }
            const windowLength = right - left + 1
            if (windowLength - mostFreqChar <= k) {
                res = Math.max(res, windowLength)
            }

            while ((right - left + 1) - mostFreqChar > k) {
                seen.delete(s[left])
                freq[s[left].charCodeAt(0) - 65]--
                left++
            }
            right++
        }
        return res
    }
}
// 'XYYX' K = 1  res = 3
[0,0,0,0,0,0,1,2,0]