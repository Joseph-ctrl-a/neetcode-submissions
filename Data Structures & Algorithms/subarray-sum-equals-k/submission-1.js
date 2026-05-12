class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {

        let res = 0
        let currentSum = 0
        let prefix = new Map()
        prefix.set(0, 1)

        for (const num of nums) {
            currentSum += num
            const previousSum = currentSum - k
            
            res += prefix.get(previousSum) || 0

            prefix.set(currentSum, (prefix.get(currentSum) || 0)+ 1)
        }
        return res
    }
}
