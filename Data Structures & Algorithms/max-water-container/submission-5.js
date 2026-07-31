class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        const calcArea = (l, r) => (Math.min(heights[l],heights[r])) * (r - l)
        let left = 0
        let right = heights.length - 1
        let area = 0
        while (left < right) {
            area = Math.max(area, calcArea(left, right))

            if (heights[left] < heights[right]) left++
            else right--
        }
        return area
    }
}
