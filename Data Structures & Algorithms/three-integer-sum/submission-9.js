class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b)
        const res = []
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) continue
            let left = i + 1
            let right = nums.length - 1

            while (left < right) {
                const sum = nums[left] + nums[right] + nums[i]
                if (sum === 0) {
                    res.push([nums[i], nums[left], nums[right]])
                    const leftValue = nums[left]
                    const rightValue = nums[right]
                    while (nums[left] === leftValue) {
                        left++
                    }
                    while (nums[right] === rightValue) {
                        right--
                    }
                }
                if (sum < 0) {
                    left++
                }
                if (sum > 0) {
                    right--
                }
            }
        }
        return res
    }
}
