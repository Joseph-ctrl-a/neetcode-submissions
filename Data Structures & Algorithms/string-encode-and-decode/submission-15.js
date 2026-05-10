class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = [];
        for (const word of strs) {
            encodedStr.push(`${word.length}:${word}`);
        }
        return encodedStr.join('');
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        const result = []
        let i = 0
        while (i < s.length) {
            let j = i;
            while (s[j] !== ':') j++;
            const length = parseInt(s.slice(i, j));
            const word = s.slice(j + 1, j + 1 + length);
            result.push(word);
            i = j + 1 + length;
        }

        return result;
}
    
}
