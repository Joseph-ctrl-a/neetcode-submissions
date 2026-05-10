class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {

        people.sort((a,b) => a - b)
        console.log(people)
        // Two Pointers One pointe at the start another at the end o logn n time constant space?

        // Two sceaniors
        // 1. They fit into a  boat (advancde both pointers)
        // 2. they DONT fit into a boat (advance the pointer on the right)

        // In both sceaniors increase the amount of boats i have

        let boats = 0 // 3

        let left = 0 // 1
        let right = people.length - 1 // 1

        while (left <= right) {

            if (left === right) {
                boats++
                return boats
            }
            const sum = people[left] + people[right] // 4

            if ((sum <= limit)) {
                left++
                right--
            }

            if (sum > limit) {
                right--
            }

            boats++
        }
        return boats
    }
}
