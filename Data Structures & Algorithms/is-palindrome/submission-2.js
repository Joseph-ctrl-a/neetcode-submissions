class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(char) {
        return /^[a-zA-Z0-9]$/.test(char);
    }
    isPalindrome(s) {
        let left = 0
        let right = s.length - 1
        console.log(s[left], s[right])
        while (left < right) {

            while(left < right && !this.isAlphanumeric(s[left] )) {
                left++
            }
            while (left < right && !this.isAlphanumeric(s[right])) {
                right--
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
            left++
            right--
        }
        return true
    }
}
