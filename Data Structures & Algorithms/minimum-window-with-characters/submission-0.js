class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const chars = new Map()
        const window = new Map()
        


        for (const char of t) {
            chars.set(char, (chars.get(char) || 0) + 1)        
        }

        let left = 0
        let right = 0

        const needed = chars.size
        let formed = 0

        let res = [-1, -1]
        let resLen = Infinity
        while (right < s.length) {
            const char = s[right]
            window.set(char, (window.get(char) || 0) + 1)

            if (chars.has(char)) {
                if (chars.get(char) === window.get(char)) {
                    formed++
                }
            }
            while (needed === formed) {
                const char = s[left]
                const windowLength = right - left
                if (windowLength < resLen) {
                    resLen = windowLength
                    res = [left, right]
                }
                window.set(char, (window.get(char) || 0) - 1)
                if (chars.has(char)) {
                    if (chars.get(char) > window.get(char)) {
                        formed--
                }
            }
                left++
            }
            right++
        }
        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1)
    }
}
