class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let cOne = Array(2).fill(0)
        let cTwo = Array(2).fill(0)

        for (const num of nums) {
            if (num === cOne[0]) cOne[1]++

            else if (num === cTwo[0]) cTwo[1]++

            else if (cOne[1] === 0) cOne = [num, 1]

            else if (cTwo[1] === 0) cTwo = [num, 1]
            else {
              cOne[1]--
              cTwo[1]--
            }
        }
        
        const res = []
        let count1 = 0
        let count2 = 0
        for (const num of nums) {
            if (num === cOne[0]) count1++
            else if (num === cTwo[0]) count2++
        }
        if (count1 > Math.floor(nums.length / 3)) res.push(cOne[0])
        if (count2 > Math.floor(nums.length / 3)) res.push(cTwo[0])
        return res
    }
}
