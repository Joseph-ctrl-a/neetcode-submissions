class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map()
        const cols = new Map()
        const box = new Map()

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board.length; col++) {
                const num = board[row][col]
                if (num === '.') continue
                const rowKey = row
                const colKey = col
                const boxKey = `${Math.floor(row / 3)}-${Math.floor(col / 3)}`

                const isValid = this.validateMap(rows, rowKey, num) 
                                && this.validateMap(cols, colKey, num) 
                                && this.validateMap(box, boxKey, num)
                
                if (!isValid) return false
            }
        }
        return true
    }
    validateMap(map, key, num) {
        if (!map.has(key)) map.set(key, new Set())

        if (map.get(key).has(num)) return false

        map.get(key).add(num)

        return true
    }
}
