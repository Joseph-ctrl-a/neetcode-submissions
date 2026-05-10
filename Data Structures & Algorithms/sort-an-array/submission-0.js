class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {

        function merge(L, M, R) {

            const leftArr = nums.slice(L, M + 1)
            const rightArr = nums.slice(M + 1, R + 1)

            let i = L
            let j = 0, k = 0

            while (j < leftArr.length && k < rightArr.length) {
                if (leftArr[j] < rightArr[k]) {
                    nums[i] = leftArr[j]
                    j++
                } else {
                    nums[i] = rightArr[k]
                    k++
                }
                i++
            }
            
            while (j < leftArr.length) {
                nums[i] = leftArr[j]
                i++
                j++
            }
            while (k < rightArr.length) {
                nums[i] = rightArr[k]
                i++
                k++
            }
        }
        function divide(L, R) {
            if (L >= R) return
            
            const midPoint = Math.floor((L + R) / 2)

            divide(L, midPoint)
            divide(midPoint + 1, R)
            merge(L, midPoint, R)
        }
        divide(0, nums.length - 1)
        return nums
    }
}
