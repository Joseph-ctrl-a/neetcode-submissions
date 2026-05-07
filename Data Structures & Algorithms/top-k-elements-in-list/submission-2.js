class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqCounter = {}
        for (const num of nums) {
            freqCounter[num] = ++freqCounter[num] || 1
        }
        
        const bucket = Array.from({length: nums.length}, () => [])

        for (const key in freqCounter) {
            bucket[freqCounter[key] - 1].push(key)
        }
        
        const res = []
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const num of bucket[i]) {
                res.push(num)
                if (res.length === k) return res
            }
        }
    }
}