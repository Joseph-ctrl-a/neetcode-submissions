class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        
        const rows = Array.from({length: 9}, () => new Set())
        const cols = Array.from({length: 9}, () => new Set())
        const box = new Map()

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const value = board[r][c]
                if (value === ".") continue


                const row = Math.floor(r / 3)
                const col = Math.floor(c / 3)
                const key = `${row}-${col}`
                 if (!box.has(key)) box.set(key, new Set())


                if (rows[r].has(value) || cols[c].has(value) || box.get(key).has(value)) return false
               
                box.get(key).add(value)
                rows[r].add(value)
                cols[c].add(value)
                
            }
        }
        return true
    }
}
