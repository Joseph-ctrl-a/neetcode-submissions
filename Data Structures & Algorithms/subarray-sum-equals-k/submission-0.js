class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixSum = new Map()
        let res = 0
        let sum = 0
        prefixSum.set(0, 1)

        for (const num of nums) {
            sum += num
            const diff = sum - k

            res += prefixSum.get(diff) || 0

                        prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1)
        }
        return res
    }
}
0