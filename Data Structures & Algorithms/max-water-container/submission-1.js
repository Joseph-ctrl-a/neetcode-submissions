class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    calcMaxArea(left, right) {
        return  Math.min(this[left], this[right]) * (right - left)
    }
    maxArea(heights) {
        const calcArea = this.calcMaxArea.bind(heights)
        let left = 0
        let right = heights.length - 1

        let currArea = calcArea(left, right)

        while (left < right) {
            const area = calcArea(left, right)
            currArea = Math.max(area, currArea)
            if (heights[left] <= heights[right]) {
                left++
            }
            else {
                right--
            }
        }
        return currArea
    }
}
