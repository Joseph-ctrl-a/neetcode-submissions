class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const counter = {}

        for (let i = 0; i < nums.length; i++) {
            const key = nums[i]
            counter[key] = (counter[key] || 0) + 1
        }
        
        
        const bucket = Array(nums.length + 1).fill(0).map(() => [])

        for (const num in counter) {
                const index = counter[num]


                bucket[index].push(Number(num))
        }
        const result = []
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (let j = 0; j < bucket[i].length; j++) {
                if (result.length === k) return result
                result.push(bucket[i][j])
            }
        }
        return result
    }
}
