class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let num1 = 0
        let freq1 = 0

        let num2 = 0
        let freq2 = 0

        for (const num of nums) {
            if (num === num1) {
                freq1++
            } 
            else if (num === num2) {
                freq2++
            }
            else if (freq1 === 0) {
                num1 = num
                freq1 = 1
            } 
            else if (freq2 === 0) {
                num2 = num
                freq2 = 1
            }
            else {
                freq1--
                freq2--
            }
        }
        let count1 = 0
        let count2 = 0
        const res = []
        for (const num of nums) {
            if (num === num1) count1++
            else if (num === num2) count2++
        }
        if (count1 > Math.floor(nums.length / 3)) res.push(num1)
        if (count2 > Math.floor(nums.length / 3)) res.push(num2)

        return res
    }
}
