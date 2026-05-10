class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    // [v], left = 1 right = 2, length = 2
    lengthOfLongestSubstring(s) {
        let left = 0
        let right = 0
        let seen = new Set()
        let length = 0
        while (right < s.length) {
            while (right < s.length && !seen.has(s[right])) {
                seen.add(s[right])
                right++
            }
            console.log(seen)
            length = Math.max(length, (right - left))
            while (left < s.length && seen.has(s[right])) {
                seen.delete(s[left])
                left++
            }
        }
        return length
    }
}
