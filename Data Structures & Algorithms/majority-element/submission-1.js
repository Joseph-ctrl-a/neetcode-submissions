class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

        let freq = 0
        let res = nums[0]
        for (const num of nums) {
            if (num === res) {
                freq++
                continue
            } else {
                freq--
                if (freq === 0) {
                    res = num
                    freq = 1
                }
            }
        }
        return res

    }
}
