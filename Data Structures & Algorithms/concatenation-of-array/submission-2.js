class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {

        let i = 0
        const n = nums.length
        while (i < n) {
            nums.push(nums[i])
            i++
        }
        return nums
    }
}
