class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let val = 0
        let freq = 0

        for (const num of nums) {
            if (num === val) {
                freq++
                continue
            }

            if (freq === 0) {
                val = num
                freq++
            }

            if (num !== val) {
                freq--
            }
        } 
        return val
    }
}
