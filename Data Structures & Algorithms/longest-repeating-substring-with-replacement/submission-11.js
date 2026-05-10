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

    	const seen = new Set()



        let freqCounter = 0
        while (right < s.length) {
            let mostFreq = 0
            seen.add(s[right])
            counter[s[right].charCodeAt(0) - 65] += 1

            for (const char of seen) {
                const index = char.charCodeAt(0) - 65
                mostFreq = Math.max(counter[index], mostFreq)
            }


            const windowLength = right - left + 1
            const maxReplacements = windowLength - mostFreq
            if (maxReplacements <= k) {
              freqCounter = Math.max(freqCounter, windowLength)
            }
            while ((right - left + 1) - mostFreq > k) {
                counter[s[left].charCodeAt(0) - 65]--
                left++

            }
            right++
        }

        return freqCounter
    }

    
}
"XYY"