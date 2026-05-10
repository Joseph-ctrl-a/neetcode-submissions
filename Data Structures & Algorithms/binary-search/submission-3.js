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
            const mid = Math.floor((left + right) / 2)
            const currNum = nums[mid]

             if (currNum < target) {
                left = mid + 1
            }
            if (currNum > target) {
                right = mid - 1
            }
            if (currNum === target) return mid
        }
        return -1
    }
}
