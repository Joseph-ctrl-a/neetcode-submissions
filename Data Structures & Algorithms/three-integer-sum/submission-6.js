class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const ans = []
        const sortedNums = nums.slice().sort((a,b) => a - b)
        console.log(sortedNums)
        for (let i = 0; i < sortedNums.length - 2; i++) {
            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
                continue
            }
            let left = i + 1
            let right = sortedNums.length - 1
            while (left < right) {
                console.log(left, right, i)
                const sum = sortedNums[i] + sortedNums[left] + sortedNums[right]
                if (sum === 0) {
                    ans.push([sortedNums[i], sortedNums[left], sortedNums[right]])
                    while (sortedNums[left] === sortedNums[left + 1]) {
                        left++
                    }
                    while (sortedNums[right] === sortedNums[right - 1]) {
                        right--
                    }
                    left++
                    right--
                    continue
                }
               else if (left < right && sum > 0) {
                    right--
                }
               else  if (left < right && sum < 0) {
                    left++
                }
            }
        }
        return ans
    }
}
