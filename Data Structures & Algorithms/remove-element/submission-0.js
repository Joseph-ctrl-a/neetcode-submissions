class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {

        let left = 0

        for (const num of nums) {
            if (num !== val) {
                nums[left++] = num
            }
        }
        return left
    }
}
