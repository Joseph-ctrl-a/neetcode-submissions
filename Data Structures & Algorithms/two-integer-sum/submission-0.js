class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map()

        for (let i = 0; i < nums.length; i++) {
            const lookingFor = target - nums[i]
            if (seen.has(lookingFor)) return [seen.get(lookingFor), i]

            seen.set(nums[i], i)

            console.log(seen, lookingFor)
        }
    }
}
