class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        k = k % nums.length;

        let [l, r] = [0, nums.length - 1];

        this.reverse(nums,l,r)
        this.reverse(nums, 0, k - 1)
        this.reverse(nums, k, nums.length - 1)
        return nums
    }
    reverse(nums, l, r) {
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }
}

[5,6,7,8,4,3,2,1]
