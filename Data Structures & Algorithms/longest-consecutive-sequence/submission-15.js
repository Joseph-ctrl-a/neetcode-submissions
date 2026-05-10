class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums)
        let res = 0 
        for (const num of nums ) {
            if (seen.has(num - 1)) continue
            let i = 0
            while (seen.has(num + i)) {
                i++
            }
            res = Math.max(res, i)
        }
        return res
    }
}
