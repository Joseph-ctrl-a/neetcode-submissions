class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left <= right) {
           const mid = Math.floor((left + right) / 2)
    	    console.log(mid)
           if (nums[mid] === target) return mid

           if (nums[mid] >= nums[left]) { // Checking to see if the left side is sorted
                if (target >= nums[left] && target <= nums[mid]) { // Is target within the bounds?
                    right = mid - 1 // Move pointer to be within the left side
                }
                else {
                    left = mid + 1
                }
           }
           else if (target <= nums[right] && target >= nums[mid]){
                    left = mid + 1
                }
            else {
                right = mid - 1
            }
        }
        return -1
    }
}
// If we looked at the middle number, and then compared that to nmber on the left, 
//