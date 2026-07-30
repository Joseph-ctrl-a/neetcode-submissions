class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        if (nums.length < 4) return []
        nums.sort((a,b) => a - b)



        let right = 0
        const res = []



        while (right < nums.length - 2) {
            while (nums[right - 1] === nums[right]) right++


            let left = right + 1
            while (left < nums.length - 2) {
                // Do something
                while (left > right + 1 && nums[left - 1] === nums[left]) left++
                const sum = nums[left] + nums[right] // -3
                const lookingFor = target - sum // 0

                let l = left + 1
                let r = nums.length - 1
            // looking for 6

                while (l < r) {
                    // Look for a sum that is lookingFor
                    const sum = nums[l] + nums[r]

                    if (sum < lookingFor) l++
                    else if (sum > lookingFor) r--
                    else {
                        res.push([nums[right], nums[left], nums[l], nums[r]])
                        l++
                        r--
                        while (l < r && nums[l] === nums[l - 1]) l++
                        while (l < r && nums[r] === nums[r + 1]) r--
                    }
                }
                left++
            }
            right++
        }
        return res
    }
}

// 3 - 5 = -2
// [-3,0,3,0,,1,2,3,3]