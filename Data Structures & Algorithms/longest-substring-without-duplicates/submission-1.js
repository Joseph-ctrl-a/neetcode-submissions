class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0
        let left = 0
        let right = 0
        const seen = new Set()
        while (right < s.length) {
            while (!seen.has(s[right]) && right < s.length) {
                seen.add(s[right])
                right++
            }
            longest = Math.max(longest, right - left)
            while (seen.has(s[right]) && left < s.length) {
                seen.delete(s[left])
                left++
            }
        }
    return longest
    }
}
// const seen = {"a": 1}