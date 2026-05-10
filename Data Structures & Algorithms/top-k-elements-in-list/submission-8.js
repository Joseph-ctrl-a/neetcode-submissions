class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const bucket = this.createBucket(nums.length + 1, this.freqCounter(nums))
        const answer = []

        for (let i = nums.length; i >= 0; i--) {
            let j = 0
            while (answer.length !== k && j < bucket[i].length) {
                answer.push(bucket[i][j])
                j++
            }
        }
        return answer
    }
    freqCounter(arr) {
        const frequencyCounter = {}

        for (const num of arr) {
            frequencyCounter[num] = (frequencyCounter[num] || 0) + 1
        }

        return frequencyCounter
    }
    createBucket(length, counter) {
        const bucket = Array.from({length}, () => [])

        for (const num in counter) {
            const freqIndex = counter[num]
            bucket[freqIndex].push(num)
        }
        return bucket
    }
}
