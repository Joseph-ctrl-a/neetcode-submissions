class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

    let left = 0
    let right = s.length - 1

    while (left < right) {
        if (!this.isAlphanumeric(s[left])) {
            left++
            continue
        }
        if (!this.isAlphanumeric(s[right])) {
            right--
            continue
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false
        }
        left++
        right--
    }
    return true
    }
    isAlphanumeric(char) {
            const asciiValue = char.charCodeAt(0)
            if ((asciiValue >= 97 && asciiValue <= 122) || 
                (asciiValue >= 48 && asciiValue <= 57) ||
                (asciiValue >= 65 && asciiValue <= 90) ) return true
                 
            return false
    }
}
// ||