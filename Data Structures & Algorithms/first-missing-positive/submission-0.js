class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        for (let i = 0; i < nums.length; i++) {
            const index = nums[i] - 1 

            if (nums[i] <= 0 || nums[i] > nums.length) continue

            if (nums[i] != nums[index]) {
                [nums[index], nums[i]] = [nums[i], nums[index]]
                i--
            }
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== i + 1 ) return i + 1
        }
        return nums.length + 1
    }
}
