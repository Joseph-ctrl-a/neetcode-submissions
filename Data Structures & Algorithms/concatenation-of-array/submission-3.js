class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let length = nums.length
        let i = 0
        while (i < length) {
            nums.push(nums[i]) 
            i++
        }
        return nums
    }
}

// Time: O(n)
// Space:  O(n)