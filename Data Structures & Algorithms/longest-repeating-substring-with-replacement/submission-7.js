class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0
        let right = 0

        const counter = Array.from({length: 26}, () => 0)
        let mostFreq = 0
        let maxLength = 0

        while (right < s.length) {
            const index = s[right].charCodeAt(0) - 65
            counter[index]++
            mostFreq = Math.max(mostFreq, counter[index])

            while ((right - left + 1) - mostFreq > k) {
                counter[s[left].charCodeAt(0) - 65]--
                left++
            }

            maxLength = Math.max(maxLength, right - left + 1)
            right++
        }

        return maxLength
    }
}
