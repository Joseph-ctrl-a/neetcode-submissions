class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums)
        let longestSeq = 0

        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i] - 1)) continue
            let j = 1
            while (seen.has(nums[i] + j)) {
                j++
            }
            longestSeq = Math.max(longestSeq, j)
        }
        return longestSeq

    }
}