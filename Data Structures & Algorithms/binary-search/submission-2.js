class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left <= right) {
            const midPoint = Math.floor((right + left) / 2)
            const value = nums[midPoint]
            if (value < target) {
                left = midPoint + 1 
            }
            if (value > target) {
                right = midPoint - 1
            }
            if (value === target) return midPoint
        }
        return -1
    }
}
