class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    calcArea(arr, left, right) {
        const area = Math.min(arr[left], arr[right]) * (right - left)
        console.log(left, right, area)
        
        return area
    }
    maxArea(heights) {
        let area = 0

        let left = 0
        let right = heights.length - 1

        while (left < right) {
            const newArea = this.calcArea(heights, left, right)
            area = Math.max(newArea, area)

            if (heights[left] < heights[right]) {
                left++
            }
            else {
                right--
            }
        }
        return area
    }
}
