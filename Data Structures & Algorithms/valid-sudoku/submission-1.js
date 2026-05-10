class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map()
        const columns = new Map()
        const squares = new Map()
        

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') continue

                const boxKey = `${Math.floor(row / 3)}-${Math.floor(col / 3)}`
                const value = board[row][col]
                if (!this.addSetToInMap(rows, row, value)) return false
                if (!this.addSetToInMap(columns, col, value)) return false
                if (!this.addSetToInMap(squares, boxKey, value)) return false

            }
        }
        return true
    }
    addSetToInMap(map, key, value) {
        if (!map.has(key)) {
            map.set(key, new Set())
        }

        if (map.get(key).has(value)) return false
        map.get(key).add(value)
        return true
    }
}
