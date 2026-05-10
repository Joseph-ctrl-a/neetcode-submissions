class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    twoSum(numbers, target = 0, startNum) {
        let left = 0
        let right = numbers.length - 1
        while (left < right) {
            let sum = numbers[left] + numbers[right] + startNum

            while (sum > target) {
                right--
                sum = numbers[left] + numbers[right] + startNum
            }

            while (sum < target) {
                left++
                sum = numbers[left] + numbers[right] + startNum
            }
            if (sum === target) {
                return [left + 1, right + 1]
            }

        }
    }
    threeSum(nums) {
        nums.sort((a,b) => a - b) // Sort the Input
        const result = []
        for (let i = 0; i < nums.length - 2; i++) {
            const currNum = nums[i] // -1
            let left = i + 1 // 2
            let right = nums.length - 1 // 5
            if (currNum === nums[i - 1]) {
                continue
            }
            while (left < right) {
                const sum = currNum + nums[left] + nums[right] // -1

                if (sum > 0 && left < right) {
                    right--
                }
               else if (sum < 0 && left < right) {
                    left++
                }
               else if (sum === 0) {
                     result.push([currNum, nums[left], nums[right]])
                     while (nums[right] === nums[right - 1] && left < right) {
                            right--
                     }
                     while (nums[left] === nums[left + 1] && left < right) {
                            left++
                     }
                    left++
                    right--
                }
            }
        }
        return result
    }
}
[-4, -1, -1, 0, 1, 2]
