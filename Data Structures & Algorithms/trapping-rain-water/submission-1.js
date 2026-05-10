class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let water = 0

        // Keep track of the left max and right max most value we've seen priror to i
        // We wil take the min of those twos
        // And substract that from the current pillar we're at

        let left = 0
        let right = height.length - 1

        let maxL = height[left]
        let maxR = height[right]

        while (left < right) {
            if (height[left] <= height[right]) {
                maxL = Math.max(height[left], maxL)
                let currWater = maxL - height[left]
                if (currWater < 0) currWater = 0
                water += currWater
                left++
            }
            else {
                maxR = Math.max(height[right], maxR)
                let currWater = maxR - height[right]
                if (currWater < 0) currWater = 0
                water += currWater
                right--
            }
        }
        return water
    }
}