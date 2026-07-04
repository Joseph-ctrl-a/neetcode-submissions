class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0
        const visited = new Set()

        function key(i, j) {
            return `i${i}j${j}`
        }
        function dfs(row, col) {
           if (row >= grid.length || row < 0 || col >= grid[0].length || col < 0 || grid[row][col] === 0 ) return 0
          const id = key(row, col)
           if (visited.has(id)) return 0
           visited.add(id)
           let area = 1 + dfs(row, col + 1)
           area += dfs(row, col - 1)
           area += dfs(row + 1, col)
           area += dfs(row - 1, col)
           
           return area
        }

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === 1 && !visited.has(key(row, col))) {
                    maxArea = Math.max(maxArea, dfs(row, col))
                }
            }
        }
        return maxArea
    }
}
// If i encoutner a 1
// Peform dfs, count the amount of 1s
// Compare to max island count update maxisland count