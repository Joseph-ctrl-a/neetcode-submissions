class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {}

        for (let i = 0; i < nums.length; i++) {
            const lookingFor = target - nums[i]

            if (lookingFor in seen) {
                return [seen[lookingFor], i]
            }

            seen[nums[i]] = i
        }
    }
}