class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];
        for (const asteroid of asteroids) {
            const possibleCollison = () => stack.length > 0 && stack.at(-1) > 0 && asteroid < 0;
            if (possibleCollison()) {
                let alive = true
                while (alive && possibleCollison()) {
                    const absAsteroid = Math.abs(asteroid); // 5
                    if (stack.at(-1) < absAsteroid) {
                        stack.pop();
                    } else if (stack.at(-1) === absAsteroid) {
                        stack.pop();
                        alive = false
                    }
                    else {
                        alive = false
                    }
                }
                if (alive) {
                    stack.push(asteroid)
                }
            } else {
                stack.push(asteroid);
            }
        }
        return stack;
    }
}
// const asteroids = [10,2-5]  
//                         ^
// const stack = [10,-5]
        


