class Solution {
    /**
     * @param {number[]} nums 
     */
    getConcatenation(nums) {

        let i = 0
        let n = nums.length
        
        while (i < n) {
            nums.push(nums[i])
            i++
        }
        return nums
    }
}

