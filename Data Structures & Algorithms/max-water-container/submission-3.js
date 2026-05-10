class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    calcArea(arr, left, right) {
        return Math.min(arr[left], arr[right]) * (right - left)
    }
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let max = 0

        while (left < right) {
            console.log(left, right)
            max = Math.max(max, this.calcArea(heights, left, right))

            if (heights[left] < heights[right]) {
                left++
            }
            else {
                right--
            }
        }
        return max
    }
}
