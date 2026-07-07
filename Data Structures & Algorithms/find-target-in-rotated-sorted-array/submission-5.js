class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const midPoint = Math.floor((right + left) / 2);

            if (nums[midPoint] === target) return midPoint;

            if (nums[left] <= nums[midPoint]) {
                if (nums[left] <= target && target <= nums[midPoint]) {
                    right = midPoint - 1;
                } else {
                    left = midPoint + 1;
                }
            } 
            else {
                if (nums[midPoint] <= target && target <= nums[right]) {
                    left = midPoint + 1;
                } else {
                    right = midPoint - 1;
                }
            }
        }
        return -1;
    }
}
//        M R
// [3,4,5,1,2]
//          ^
