class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {

        const queue = []

        const ROWS = grid.length
        const COLS = grid[0].length
        let freshFruits = 0
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) freshFruits++
                if (grid[r][c] === 2) queue.push([r, c])
            }
        }

        const dirs = [
            [0,1],
            [0,-1],
            [1,0],
            [-1,0]
        ]

        let minutes = 0

        while (queue.length && freshFruits > 0) {
            const level =  queue.length
            for (let i = 0; i < level; i++) {
                const [r,c] = queue.shift()
                for (const [dc, dr] of dirs) {
                    const [nr, nc] = [r + dr, c + dc]
                    const isOutBounds = nr >= ROWS || nr < 0 || nc >= COLS || nc < 0

                    if (!isOutBounds && grid[nr][nc] === 1) {
                        freshFruits--
                        grid[nr][nc] = 2
                        queue.push([nr, nc])
                    }
                }
            }
            minutes++
        }
        return freshFruits ? -1 : minutes
    }
}
