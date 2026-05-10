class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let left = 0
        let right = nums.length - 1

        let i = 0

        while (i <= right) {
            const val = nums[i]

            if (val === 0) {
                [nums[left], nums[i]] = [nums[i], nums[left]]
                left++
            }

            if (val === 2) {
                [nums[right], nums[i]] = [nums[i], nums[right]]
                right--
                i--
            }
            i++
        }
        return nums
    }
}
[1,0,2]
// l = 0 r = 1 i = 1