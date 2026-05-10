class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
       let left = 0
       let right = matrix.length - 1

       while (left <= right) {

        const midPoint = Math.floor((left + right) / 2)
        const currArr = matrix[midPoint]
        console.log(currArr)
        if (currArr[0] < target) {
            left = midPoint + 1
        }
        if (currArr.at(-1) > target) {
            right = midPoint - 1
        }
        if (currArr[0] <= target && currArr.at(-1) >= target) {
            return (this.binarySearch(currArr, target))
        }
       }
       return false
    }
    binarySearch(arr, target) {
        let left = 0
        let right = arr.length - 1

        while (left <= right) {
            const midPoint = Math.floor((left + right) / 2)

            if (arr[midPoint] < target) {
                left = midPoint + 1
            }
            if (arr[midPoint] > target) {
                right = midPoint - 1
            }
            if (arr[midPoint] === target) {
                return true
            }
        }
        return false
    }
}
