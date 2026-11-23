class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const hashmap = new Map()

        for (const [i, num] of nums.entries()) {
            const lookingFor = target - num

            if (hashmap.has(lookingFor)) return [hashmap.get(lookingFor), i]
            hashmap.set(num, i)
        }
    }
}
