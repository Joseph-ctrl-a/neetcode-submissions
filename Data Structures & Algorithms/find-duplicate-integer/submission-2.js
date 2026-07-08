class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let i = 0
        while (nums[i] !== nums[nums[i]]) {
            const num = nums[i];
            [nums[i], nums[num]] = [nums[num], nums[i]]
        }
        if (nums[i] === nums[nums[i]]) return nums[i]
    }
}

// [2,1,2,3,2]
//  0 1 2 3 4
