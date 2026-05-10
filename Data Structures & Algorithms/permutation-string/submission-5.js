class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let left = 0
        let right = 0

        const s1Chars = Array(26).fill(0)
        const s2Chars = Array(26).fill(0)

        for (const char of s1) {
            s1Chars[char.charCodeAt(0) - 97]++
        }

        while (right < s2.length) {
            s2Chars[s2[right].charCodeAt(0) - 97]++
            const windowLength = right - left + 1
            
            if (windowLength === s1.length) {
                // console.log(s1Chars, s2Chars)
                if (s1Chars.every((num, i) => num === s2Chars[i])) {
                    return true
                }
                s2Chars[s2[left].charCodeAt(0) - 97]--
                left++
            }

            right++
        }
        return false
    }
}


