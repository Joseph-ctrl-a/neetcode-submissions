class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {

        function isPalindrome(left, right) {
             while (left < right) {
            const lChar = s[left].toLowerCase()
            const rChar = s[right].toLowerCase()
            if (!isChar(lChar)) {
                left++
                continue
            }
            if (!isChar(rChar)) {
                right--
                continue
            }

            if (lChar !== rChar) return false
            left++
            right--
            }
            return true
        }
        const isChar = (char) => {
            const charCode = char.charCodeAt(0)
            return ((charCode >= 97 && charCode <= 122) ||
                (charCode >= 48 && charCode <= 57) ||
                (charCode >= 65 && charCode <= 90)
            ) 
        }
        let left = 0
        let right = s.length - 1

        while (left < right) {
            const lChar = s[left].toLowerCase()
            const rChar = s[right].toLowerCase()
            if (!isChar(lChar)) {
                left++
                continue
            }
            if (!isChar(rChar)) {
                right--
                continue
            }

            if (lChar !== rChar) {
                return isPalindrome(left + 1, right) || isPalindrome(left, right - 1)
            }
            left++
            right--
        }
        return true
    }
}
