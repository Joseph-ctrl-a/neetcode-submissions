class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((pos, i) => [pos, speed[i]]);
        cars.sort(([a], [b]) => a - b);
        const calcTime = (pos, speed) => (target - pos) / speed;

        const stack = [];
        for (const [pos, speed] of cars) {
            const time = calcTime(pos, speed);
            while (stack.length && stack.at(-1) <= time) {
                stack.pop()
            }
            stack.push(time)
        }
        return stack.length
    }
}
// [
//     [1,3] 
//     [4,2] <- // T =  3
// ]
// stack = [3]