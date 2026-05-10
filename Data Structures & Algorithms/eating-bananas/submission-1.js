class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    getMaxOfArray(arr) {
        return arr.reduce((acc, curr) => curr > acc ? curr : acc, arr[0])
    }
    minEatingSpeed(piles, h) {
        let maxK = this.getMaxOfArray(piles)
        
        let lowest = 1
        let minK = maxK


        while (lowest <= maxK) {
            const midPoint = Math.floor((maxK + lowest) / 2)
            let hours = 0
            for (const pile of piles) {
                hours += Math.ceil(pile / midPoint)
            }
            if (hours <= h) {
                minK = Math.min(midPoint, minK)
                maxK = midPoint - 1
            }
            else if (hours > h) {
                lowest = midPoint + 1
            }
        }
        return minK
    }
}
// 25 / 2 = 12