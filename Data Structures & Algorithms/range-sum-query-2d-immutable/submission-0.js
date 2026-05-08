class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const  rows = matrix.length
        const  cols = matrix[0].length

        this.prefix = Array.from({length: rows + 1}).map(() => Array.from({length: cols + 1}).map(() => 0))

        for (let r = 1; r <= rows; r++) {
            for (let c = 1; c <= cols; c++) {
                this.prefix[r][c] = matrix[r - 1][c - 1] + this.prefix[r - 1][c] + this.prefix[r][c - 1] - this.prefix[r - 1][c - 1]
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        const bottomRight = this.prefix[row2 + 1][col2 + 1]
        const above = this.prefix[row1][col2 + 1]
        const left = this.prefix[row2 + 1][col1]
        const topleft = this.prefix[row1][col1]

        const res  = bottomRight - above - left + topleft
        return res
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
