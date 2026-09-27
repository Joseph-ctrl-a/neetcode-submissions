class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqCounter = {}
        const bucket = Array.from({length: nums.length + 1}, () => [])
        for (const num of nums) {
            freqCounter[num] = (freqCounter[num] ?? 0) + 1
        }
        for (const [key, value] of Object.entries(freqCounter)) {
            bucket[value].push(+key)
        }

        const res = []
        for (let i = nums.length; i > 0; i--) {
            for (const num of bucket[i]) {
                res.push(num)
                if (res.length === k) return res
            }
        }
        return res
    }
}
