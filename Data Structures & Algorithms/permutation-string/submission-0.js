class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const counter = Array(26).fill(0)
        const counter2 = Array(26).fill(0)


        for (let i = 0; i < s1.length; i++) {
            const index = s1[i].charCodeAt(0) - 97
            counter2[index]++
            // counter[index]++
        }

        let left = 0
        let right = 0
        while (right < s2.length) {
            
            const rightIndex = s2[right].charCodeAt(0) - 97;
            counter[rightIndex]++;

            const windowLength = right - left + 1
            if (windowLength === s1.length) {

                if (this.equalArrays(counter2, counter)) return true

                const leftIndex = s2[left].charCodeAt(0) - 97
                counter[leftIndex]--
                left++
            }
            right++
        }
        return false
    }
    equalArrays(arr, arr2) {
       return arr.every((num , i) => num === arr2[i])
}
}
//lecabee => ab