class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // prefix and suffix 
        const prefix = []
        const suffix = []
        for (let i = 0; i < nums.length; i++) {
            const prefixNum = (prefix[i - 1] ?? 1) * nums[i]
            prefix.push(prefixNum)

            const suffixNum = (suffix[i - 1] ?? 1) * nums[nums.length - i - 1]
            suffix.push(suffixNum)
        }

        suffix.reverse() // Reverse the suffix for consistency

        // Build result
        console.log(prefix, suffix)
        const result = []
        for (let i = 0; i < nums.length; i++) {
            const resultNum = (prefix[i - 1] ?? 1) * (suffix[i + 1] ?? 1)
            result.push(resultNum)
        }
        return result
    }
}
[1]
// [1,2,8,48]
// [48,48,24,6]
// [48,24,12]