class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
         
         const box = new Map()
         const cols = Array.from({length: 9}, () => new Set())
         const rows = Array.from({length: 9}, () => new Set())
         for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const colBox = Math.floor(c / 3)
                const rowBox = Math.floor(r / 3)
                const key = `${colBox}, ${rowBox}`
                const value = board[r][c]
                if (value === '.') continue
                

                if (rows[r].has(value) || cols[c].has(value) || (box.get(key) && box.get(key).has(value))) return false
                rows[r].add(value)
                cols[c].add(value)

                if (!box.has(key)) box.set(key, new Set())
                box.get(key).add(value)

            }
         }
         return true
    }
}
