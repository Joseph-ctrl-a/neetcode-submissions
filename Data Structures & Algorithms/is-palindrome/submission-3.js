class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(char) {
        const asciiValue = char.charCodeAt(0)

        if (
            (asciiValue >= 97 && asciiValue <= 122) || 
            (asciiValue >= 65 && asciiValue <= 90) ||
            (asciiValue >= 48 && asciiValue <= 57)) return true
        return false
    }
    toAlphaNumeric(str) {
        const newStr = []
        for (const char of str) {
            if (this.isAlphaNumeric(char)) newStr.push(char.toLowerCase())
        }
        return newStr
    }
    isPalindrome(s) {
        const alphaNumericArr = this.toAlphaNumeric(s)

        let left = 0
        let right = alphaNumericArr.length - 1

        while (left <= right) {
            if (alphaNumericArr[left] !== alphaNumericArr[right]) return false
            left++
            right--
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