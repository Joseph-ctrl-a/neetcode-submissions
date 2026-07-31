class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b)
        console.log(people)
        let left = 0
        let right = people.length - 1
        let boats = 0 // 2
        while (left <= right) {
            const sum = people[left] + people[right] 

            if (sum <= limit) {
                left++
                right--
                boats += 1
            }
            else {
                right--
                boats += 1
            }
        }
        return boats
    }
}

// people=[1,2,2,3,3]
//         ^   ^  
limit=3