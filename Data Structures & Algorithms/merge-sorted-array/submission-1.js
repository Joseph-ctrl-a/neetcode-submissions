class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {

        let i = m - 1
        let j = n - 1
        let k = m + n - 1
        while (i >= 0 && j >= 0) {
            const num1 = nums1[i]
            const num2 = nums2[j]

            if (num1 >= num2) {
                nums1[k] = num1
                i--
            } else {
                nums1[k] = num2
                j--
            }
            k--
        }
        console.log(i, j, k)
        while (j >= 0) {
            nums1[k] = nums2[j]
            k--
            j--
        }
    }
}
[1,2,10,20,20,40]
[1,2]

i = -1
j = 1
k = 1