class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        let res = 0
        const ROWS = grid.length
        const COLS = grid[0].length
        const dirs = [[0,1], [1,0], [0, -1], [-1, 0]]
        function dfs(row, col) {
            if (row >= ROWS || row < 0 || col >= COLS || col < 0 || grid[row][col] === '0') return

            grid[row][col] = '0'
            for (const [dr, dc] of dirs) {
                dfs(row + dr, col + dc)
            }
        }
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (grid[row][col] === '1') {
                    res++
                    dfs(row, col)
                }
            }
        }
        return res
    }
}
