class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const dirs = [[0,1], [1,0], [-1, 0], [0,-1]]
        function dfs(r, c, char) {
            const isInBounds = r < rows && r >= 0 && c < cols && c >= 0
            if (!isInBounds) return
            if (board[r][c] !== 'O') return
            board[r][c] = char

            for (const [dr, dc] of dirs) {
                dfs(r + dr, c + dc, 'T')
            }
        }
        const rows = board.length
        const cols = board[0].length

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const isBorder = r === 0 || c === 0 || r === rows - 1 || c === cols - 1

                if (isBorder) {
                    dfs(r, c, 'T')
                }
            }
        }
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const node = board[r][c]

                if (node === 'T') board[r][c] = 'O'
                if (node === 'O') board[r][c] = 'X'
            }
        }
    }
}