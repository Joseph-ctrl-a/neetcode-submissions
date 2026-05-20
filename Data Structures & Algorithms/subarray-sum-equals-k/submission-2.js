class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {

        const sum = new Map()
        sum.set(0, 1)
        
        let currSum = 0
        let res = 0
        for (let i = 0; i < nums.length; i++) {
            currSum += nums[i]  
            const difference = currSum - k
            res += sum.get(difference) || 0

            sum.set(currSum, (sum.get(currSum) || 0) + 1)
        }
        return res
    }
}