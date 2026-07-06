class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const pre = Array(n).fill(0)
        const post = Array(n).fill(0)
        
        for (const [i, num] of nums.entries()) {
            pre[i] = num * (pre[i - 1] ?? 1)
            post[n - i - 1] = nums[n - 1 - i] * (post[n - i] ?? 1)
        }
        const res = []
        let i = 0
        while (i < n) {
            res.push((pre[i - 1] ?? 1) * (post[i + 1] ?? 1))
            i++
        }
        return res
    }
}
