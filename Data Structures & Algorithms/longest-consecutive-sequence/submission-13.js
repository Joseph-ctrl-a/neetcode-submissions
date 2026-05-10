class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums)

        let maxSeq = 0
        for (const num of nums) {
            if (seen.has(num - 1)) continue
            let i = 1
            while (seen.has(num + i))  {
                i++
            }
             maxSeq = Math.max(maxSeq, i)
        }
        return maxSeq
    }
}
