class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        

        const ROWS = grid.length
        const COLS = grid[0].length
        const dirs = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ]

        let numIslands = 0

        
        function dfs(r, c) {
            grid[r][c] = '0'

            for (const [dr, dc] of dirs) {
                const nr = r + dr
                const nc = c + dc
                const outOfBounds = nc >= COLS || nc < 0 || nr >= ROWS || nr < 0 
                
                if (!outOfBounds && grid[nr][nc] === '1') dfs(nr, nc)
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1') {
                    numIslands++
                    dfs(r,c)
                }
            }
        }
        return numIslands
    }
}
