class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(char) {
        if (!char) return false
        const asciiValue = char.charCodeAt(0)
        return (
            (asciiValue >= 97 && asciiValue <= 122) || 
            (asciiValue >= 65 && asciiValue <= 90) ||
            (asciiValue >= 48 && asciiValue <= 57)) 
    }
    isPalindrome(s) {
        let left = 0
        let right = s.length - 1

        while (left <= right) {
            while (left <= right && !this.isAlphaNumeric(s[left]) ) {
                left++
            }
            while (left <= right && !this.isAlphaNumeric(s[right])) {
                right--
            }
            if (left <= right) {
                const leftStr = s[left].toLowerCase()
                const rightStr = s[right].toLowerCase()
                if (leftStr !== rightStr) return false
                    left++
                    right--
            }
           
        }
        return true
    }
}
// "a" - 97 
// "z" - 122

// "A" - 65
// "Z" - 90

// "0" - 48
// "9" - 57