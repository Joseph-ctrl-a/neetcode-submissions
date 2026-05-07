class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const res = []
        for (const word of strs) {
            const encodedStr = []
            for (const char of word) {
                const asciiValue = char.charCodeAt(0)
                encodedStr.push(asciiValue)
                encodedStr.push(',')
            }
            encodedStr.push("!")
            res.push(encodedStr.join(''))
        }
        return res.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []
        console.log(str)

        let i = 0

        while (i < str.length) {

            // Loop through each word
            let j = i
            let word = ''
            while (str[j] !== "!") {
                let asciiValue = ''

                let k = j
                // Loop through each character (ascii value)
                while (str[k] !== ",") {
                    asciiValue += str[k]
                    k++
                }
                j = k
                word += String.fromCharCode(asciiValue)
                j++
            }
            res.push(word)
             i = j
             i++
        }
        return res
    }
}
