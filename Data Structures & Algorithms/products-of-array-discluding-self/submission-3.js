class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length
        const postfix = Array(len)
        for (let i = len - 1; i >= 0; i--) {
            postfix[i] = (postfix[i + 1] ?? 1) * nums[i]
        }
        
        const prefix = Array(len)
        for (let i = 0; i < len; i++) {
            prefix[i] = (prefix[i - 1] ?? 1) * nums[i]
        }
        const res = []
        console.log(prefix, postfix)
        for (let i = 0; i < len; i++) {
            res[i] = ((prefix[i - 1]) ?? 1) * (postfix[i + 1] ?? 1)
        }
        return res
    }
}
