class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {

        let left = 0
        let right = nums.length - 1
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

           if (
                (mid === 0 || nums[mid] < nums[mid - 1]) &&
                (mid === nums.length - 1 || nums[mid] < nums[mid + 1])
                ) {
                    return nums[mid]
                    }
            console.log(left, right, mid)
            if (nums[mid] > nums[right]) {
                left = mid + 1
            }
            else if (nums[mid] < nums[right]) {
                right = mid - 1
            }
        }
    }
}

