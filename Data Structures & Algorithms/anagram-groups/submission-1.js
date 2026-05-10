class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {}

        for (const str of strs) {
            const counter = this.countOccurences(str)
            const key = counter.join('#')
            if (!anagrams[key]) anagrams[key] = []
            anagrams[key].push(str) 
        }
        return Object.values(anagrams)
    }
    countOccurences(str) {
        const counter = Array(26).fill(0)
        for (const char of str) {
            const index = char.charCodeAt(0) - 97
            counter[index]++
        }
        return counter
    }
}
