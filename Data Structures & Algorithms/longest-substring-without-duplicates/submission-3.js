class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        let right = 0
        let seq = 0
        const seen = new Set()

        while (right < s.length) {
            while (!seen.has(s[right]) && right < s.length) {
                seen.add(s[right])
                right++
            }
            seq = Math.max(seq, right - left)

            while (seen.has(s[right]) && left < s.length) {
                seen.delete(s[left])
                left++
            }
    }
    return seq
}
}


// If we havent seen the current character, then we expand the window
// After we then calcuate the window length, compare to the current max seq
// Shift left pointer until the set doesnt contain whatever is in left