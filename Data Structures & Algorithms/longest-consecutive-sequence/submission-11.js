class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0

        const allNums = new Set(nums)
        let longestRun = 1;

        for (const num of allNums) {
            if (!allNums.has(num - 1)) {

            let currRun = 1
            
            while (allNums.has(num + currRun)) {
                currRun++
            }

            longestRun = Math.max(currRun, longestRun)
            }
        }
        return longestRun
    }
}
