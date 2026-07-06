class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let ROWS = 9
        let COLS = 9

        let rows = new Map()
        let cols = new Map()
        let box = new Map()
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                const currCell = board[row][col]
                if (currCell === '.') continue


                const rowKey = Math.floor(row / 3)
                const colKey = Math.floor(col / 3)

                const key = `${rowKey}, ${colKey}`
                if (!rows.has(row)) rows.set(row, new Set())
                if (!cols.has(col)) cols.set(col, new Set())
                if (!box.has(key)) box.set(key, new Set())

                const currRow = rows.get(row)
                const currCol = cols.get(col)
                const currBox = box.get(key)
               if (currBox.has(currCell) || currRow.has(currCell) || currCol.has(currCell)) {
                console.log(currRow, currCol, currBox, currCell)
                return false
               }

               currBox.add(currCell)
               currRow.add(currCell)
               currCol.add(currCell)
            }
        }
        return true
    }
}
