class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[nums[i]]) return nums[i]

            let j = i
            while (nums[nums[j]] !== nums[j]) {
                // Swap
                const num = nums[j]
                const temp = nums[num]
                nums[num] = num
                nums[j] =  temp
            }
            i = j
            i--
        }
    }
}