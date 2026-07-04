class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const visited = new Set()
        function key (i, j) {
            return `i${i}j${j}`
        }
        function dfs(row, col) {
            if (row >= grid.length || col >= grid[0].length || row < 0 || col < 0 || grid[row][col] === 0) {
                return 1
            }
            const id = key(row,col)
            if (visited.has(id)) return 0

            visited.add(id)
            let perimeter = dfs(row, col + 1)
            perimeter += dfs(row, col - 1)
            perimeter += dfs(row + 1, col )
            perimeter += dfs(row - 1, col )

            return perimeter
        }
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === 1) {
                    return dfs(row, col)
                }
            }
        }
    }
}
