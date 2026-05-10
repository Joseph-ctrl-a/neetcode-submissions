class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (const column of board) {
            const seen = new Set()
            for (const num of column) {
                if (seen.has(num) && num !== ".") return false
                seen.add(num)
            }
        }
        for (let i = 0; i < board.length; i++) {
            const seen = new Set()
            for (let j = 0; j < board.length; j++) {
                const num = board[j][i]
                if (seen.has(num) && num !== ".") return false
                seen.add(num)
            }  
        }

        for (let boxRow = 0; boxRow < 9; boxRow += 3) {
                for (let boxCol = 0; boxCol < 9; boxCol += 3) {
                    const seen = new Set();
                    for (let i = 0; i < 3; i++) {
                        for (let j = 0; j < 3; j++) {
                            const num = board[boxRow + i][boxCol + j];
                            if (num !== '.') {
                                if (seen.has(num)) return false;
                                seen.add(num);
                            }
                        }
                    }
                }
            }
        return true;

    }
}
