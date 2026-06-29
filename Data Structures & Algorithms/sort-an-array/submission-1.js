class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        function merge(left, mid, right) {
            const leftArr = nums.slice(left, mid + 1)
            const rightArr = nums.slice(mid + 1, right + 1)
            
            let i = left

            let k  = 0
            let j = 0

            while (k < leftArr.length && j < rightArr.length) {
                if (leftArr[k] <= rightArr[j]) {
                    nums[i] = leftArr[k]
                    k++
                }
                else {
                    nums[i] = rightArr[j]
                    j++
                }
                i++
            }
            while (k < leftArr.length) {
                nums[i] = leftArr[k]
                i++
                k++
            }
            while (j < rightArr.length) {
                nums[i] = rightArr[j]
                i++
                j++
            }
        }


        function divide(left = 0, right = nums.length - 1) {
            if (left >= right) return

            const mid = Math.floor((right + left) / 2)

            divide(left, mid)
            divide(mid + 1, right)
            merge(left, mid, right)
        }
        divide()
        return nums
    }
}
