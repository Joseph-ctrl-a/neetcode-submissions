class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const counter1 = Array(26).fill(0)
        const counter2 = Array(26).fill(0)

        for (const char of s1) {
            counter2[char.charCodeAt(0) - 97]++
        }
        console.log(counter2)

        let left = 0
        let right = 0

        while (right < s2.length) {
            counter1[s2[right].charCodeAt(0) - 97]++
            const windowLength = right - left + 1

            if (windowLength === s1.length) {
                console.log(counter1, counter2)
                if (counter1.every((num, i) => num === counter2[i])) return true
                else {
                    counter1[s2[left].charCodeAt(0) - 97]--
                    left++ 
                }
            }
            right++
        }
        return false
}
}