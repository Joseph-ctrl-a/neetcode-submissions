class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqCounter = {}
        const res = []
        for (const num of nums) {
            freqCounter[num] = (freqCounter[num] + 1) || 1
        }
        
        const bucket = Array(nums.length + 1).fill(0).map(() => [])
        for (const key in freqCounter) {
            bucket[freqCounter[key]].push(key)
        }


        for (let i = bucket.length - 1; i >= 0; i--) {
            if (bucket[i].length === 0) continue
            for (const num of bucket[i]) {
                res.push(num)
                if (res.length === k) return res
            }
        } 
    }
}
