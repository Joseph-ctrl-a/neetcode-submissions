class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}

        for (const word of strs) {
            const counter = Array.from({length: 26}, () => 0)

            for (const char of word) {
                const index = char.charCodeAt(0) - 97
                counter[index]++
            }
            
            const key = counter.join('#')
            if (!map[key]) map[key] = []
            map[key].push(word)
        }
        return Object.values(map)
    }
}
